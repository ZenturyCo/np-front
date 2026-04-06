// ============================================================
// Ngola Projects — Centralized API Service (Axios + Auto Refresh)
// ============================================================
import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { FRONTEND_ENV } from '@/lib/env';

const API_BASE = FRONTEND_ENV.apiBaseUrl;
const COMM_BASE = FRONTEND_ENV.communicationBaseUrl;
const VIDEO_BASE = FRONTEND_ENV.videoBaseUrl;

// ==================== SHARED TYPES ====================

export interface Project {
  id: string;
  tenantId?: string;
  name: string;
  description?: string;
  status?: string;
  progress?: number;
  progressPercent?: number;
  rawStatus?: string;
  industry?: string;
  industryVertical?: string;
  deadline?: string;
  dueDate?: string;
  [key: string]: unknown;
}

export interface Phase {
  id: string;
  projectId: string;
  name: string;
  status?: string;
  [key: string]: unknown;
}

export interface Label {
  id: string;
  tenantId?: string;
  name: string;
  color?: string;
  [key: string]: unknown;
}

export interface Task {
  id: string;
  tenantId?: string;
  projectId?: string;
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  assigneeId?: string;
  assigneeName?: string;
  dueDate?: string;
  [key: string]: unknown;
}

export interface MeetingParticipant {
  userId: string;
  name?: string;
  role?: string;
  [key: string]: unknown;
}

export interface Meeting {
  id: string;
  tenantId?: string;
  createdBy?: string;
  projectId?: string;
  title: string;
  description?: string;
  status?: string;
  scheduledFor?: string;
  maxParticipants?: number;
  isRecorded?: boolean;
  participants?: MeetingParticipant[];
  [key: string]: unknown;
}

export interface MeetingSummary {
  summary?: string;
  decisions?: string[];
  tasksCreated?: string[];
  actionItems?: string[];
  createdTaskIds?: string[];
  [key: string]: unknown;
}

export interface Channel {
  id: string;
  name: string;
  description?: string;
  members?: Array<{ userId: string; name?: string }>;
  [key: string]: unknown;
}

export interface Message {
  id: string;
  channelId: string;
  senderId: string;
  senderName?: string;
  content: string;
  createdAt?: string;
  [key: string]: unknown;
}

export interface Notification {
  id: string;
  userId: string;
  title?: string;
  message?: string;
  read?: boolean;
  createdAt?: string;
  [key: string]: unknown;
}

export interface Invitation {
  id?: string;
  token?: string;
  inviteUrl?: string;
  teamId?: string;
  teamName?: string;
  role?: string;
  email?: string | null;
  expiresAt?: string;
  [key: string]: unknown;
}

export interface TeamMember {
  id: string;
  tenantId?: string;
  email: string;
  fullName: string;
  role: "admin" | "manager" | "member" | "viewer" | "guest" | string;
  presence?: "online" | "away" | "offline" | string;
  completedTasks?: number;
  totalTasks?: number;
  onTimeRate?: number;
  projects?: Array<{ id: string; name: string }>;
  [key: string]: unknown;
}

// ==================== AXIOS INSTANCES ====================

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

const _token = localStorage.getItem('accessToken');
if (_token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${_token}`;
}

const commApi = axios.create({
  baseURL: COMM_BASE,
  headers: { 'Content-Type': 'application/json' },
});

const videoApi = axios.create({
  baseURL: VIDEO_BASE,
  headers: { 'Content-Type': 'application/json' },
});

// ==================== TOKEN MANAGEMENT ====================

export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  delete api.defaults.headers.common['Authorization'];
};

const getAccessToken = (): string | null => localStorage.getItem('accessToken');
const getRefreshToken = (): string | null => localStorage.getItem('refreshToken');

// ==================== REFRESH TOKEN LOGIC ====================

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: string | null) => void;
  reject: (error?: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// Request Interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor com Refresh Automático
api.interceptors.response.use(
  (response: AxiosResponse) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status !== 401 || originalRequest._retry) {
      const message = (error.response?.data as any)?.message || error.message || 'Erro na requisição';
      throw new ApiError(error.response?.status || 500, message, error.response?.data);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((token) => {
        if (token) originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      }).catch((err) => Promise.reject(err));
    }

    isRefreshing = true;
    originalRequest._retry = true;

    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      isRefreshing = false;
      clearTokens();
      window.location.href = '/login';
      return Promise.reject(error);
    }

    try {
      const { data } = await api.post<{ accessToken: string; refreshToken: string }>(
        '/auth/refresh',
        { refreshToken }
      );

      setTokens(data.accessToken, data.refreshToken);

      // Sincroniza o Zustand com os novos tokens para evitar rotation failure
      const { useAuthStore } = await import('@/store/auth.store');
      useAuthStore.setState({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      processQueue(null, data.accessToken);
      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      clearTokens();

      // Limpa também o Zustand
      const { useAuthStore } = await import('@/store/auth.store');
      useAuthStore.setState({
        accessToken: null,
        refreshToken: null,
        user: null,
      });

      window.location.href = '/login';
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

// ==================== ERROR CLASS ====================

export class ApiError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, message: string, body: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

// ==================== HELPER PARA COMM E VIDEO ====================

const createRequest = (instance: typeof axios) => {
  return async <T>(url: string, method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET', data?: any): Promise<T> => {
    const response = await instance({
      url,
      method,
      data: data ? JSON.stringify(data) : undefined,
    });
    return response.data;
  };
};

const normalizeTaskStatusFromApi = (status?: string): string => {
  if (!status) return 'todo';
  if (status === 'backlog') return 'todo';
  if (status === 'in_review') return 'review';
  return status;
};

const normalizeTaskPriorityFromApi = (priority?: string): string => {
  if (!priority) return 'normal';
  if (priority === 'critical') return 'urgent';
  if (priority === 'medium') return 'normal';
  return priority;
};

const mapTaskForUi = (task: any): any => ({
  ...task,
  status: normalizeTaskStatusFromApi(task.status),
  priority: normalizeTaskPriorityFromApi(task.priority),
});

const mapTaskForApi = (task: any): any => {
  const status = task?.status === 'review' ? 'in_review' : task?.status;
  const priority =
    task?.priority === 'urgent'
      ? 'critical'
      : task?.priority === 'normal'
        ? 'medium'
        : task?.priority;

  return {
    ...task,
    status,
    priority,
  };
};

// ==================== AUTH API ====================

export const authApi = {
  register: (data: any) =>
    api
      .post<{
        accessToken?: string;
        refreshToken?: string;
        tokens?: { accessToken: string; refreshToken: string };
      }>('/auth/register', data)
      .then(res => res.data),

  login: (data: any) =>
    api
      .post<{
        accessToken?: string;
        refreshToken?: string;
        tokens?: { accessToken: string; refreshToken: string };
      }>('/auth/login', data)
      .then(res => res.data),

  refresh: (refreshToken: string) =>
    api.post<{ accessToken: string; refreshToken: string }>('/auth/refresh', { refreshToken }).then(res => res.data),

  logout: (refreshToken: string) =>
    api.post<void>('/auth/logout', { refreshToken }).then(res => res.data),

  enable2FA: () =>
    api.post<{ secret: string; qrCode: string }>('/auth/2fa/enable').then(res => res.data),

  verify2FA: (code: string) =>
    api.post<{ success: boolean }>('/auth/2fa/verify', { code }).then(res => res.data),

  me: () =>
    api
      .get<{
        id: string;
        email: string;
        fullName: string;
        tenantId: string;
        role?: 'admin' | 'manager' | 'member';
        onboardingComplete?: boolean;
      }>('/me')
      .then(res => res.data),

  users: () =>
    api.get<Array<{ id: string; email: string; fullName: string }>>('/users').then(res => res.data),

  // Multi-step registration endpoints
  registerMultiStep: (data: any) =>
    api
      .post<{
        accessToken?: string;
        refreshToken?: string;
        tokens?: { accessToken: string; refreshToken: string };
      }>('/auth/register-multi-step', data)
      .then(res => res.data),

  requestEmailOtp: (email: string) =>
    api.post<{ success: boolean }>('/auth/request-email-otp', { email }).then(res => res.data),

  verifyEmailOtp: (email: string, otp: string) =>
    api.post<{ success: boolean }>('/auth/verify-email-otp', { email, otp }).then(res => res.data),

  requestPhoneOtp: (phone: string) =>
    api.post<{ success: boolean }>('/auth/request-phone-otp', { phone }).then(res => res.data),

  verifyPhoneOtp: (phone: string, otp: string) =>
    api.post<{ success: boolean }>('/auth/verify-phone-otp', { phone, otp }).then(res => res.data),
};

// ==================== MAIN APIS ====================

export const tenantApi = {
  create: (data: Record<string, unknown>) => api.post<{ id: string }>('/tenants', data).then(res => res.data),
  onboarding: (data: Record<string, unknown>) => api.post<{ id: string }>('/tenants/onboarding', data).then(res => res.data),
  list: () => api.get<Array<{ id: string; name: string }>>('/tenants').then(res => res.data),
  get: (id: string) => api.get<{ id: string; name: string }>(`/tenants/${id}`).then(res => res.data),
  update: (id: string, data: Record<string, unknown>) => api.patch<void>(`/tenants/${id}`, data).then(res => res.data),
  delete: (id: string) => api.delete<void>(`/tenants/${id}`).then(res => res.data),
};

export const projectApi = {
  createTemplate: (data: Record<string, unknown>) => api.post<{ id: string }>('/projects/templates', data).then(res => res.data),
  listTemplates: (industry?: string) =>
    api.get<Array<{ id: string; name: string; industry: string }>>(
      `/projects/templates${industry ? `?industry=${industry}` : ''}`
    ).then(res => res.data),

  create: (data: Record<string, unknown>) => api.post<Project>('/projects', data).then(res => res.data),

  list: (tenantId: string) =>
    api.get<any[]>(`/projects?tenantId=${tenantId}`).then(res =>
      res.data.map(p => ({
        ...p,
        rawStatus: p.status,
        industry: p.industryVertical,
        deadline: p.dueDate,
        progress: p.progressPercent,
        status: p.status === 'planning' ? 'Activo'
              : p.status === 'on_hold' ? 'Pausado'
              : p.status === 'completed' ? 'Concluído'
              : 'Activo',
      }))
    ),

  get: (id: string) => api.get<Project>(`/projects/${id}`).then(res => res.data),
  update: (id: string, data: Record<string, unknown>) => api.patch<Project>(`/projects/${id}`, data).then(res => res.data),
  delete: (id: string) => api.delete<void>(`/projects/${id}`).then(res => res.data),
};

export const phaseApi = {
  create: (data: Record<string, unknown>) => api.post<Phase>('/phases', data).then(res => res.data),
  list: (projectId: string) => api.get<Phase[]>(`/phases?projectId=${projectId}`).then(res => res.data),
  update: (id: string, data: Record<string, unknown>) => api.patch<Phase>(`/phases/${id}`, data).then(res => res.data),
  delete: (id: string) => api.delete<void>(`/phases/${id}`).then(res => res.data),
};

export const labelApi = {
  create: (data: Record<string, unknown>) => api.post<Label>('/labels', data).then(res => res.data),
  list: (tenantId: string) => api.get<Label[]>(`/labels?tenantId=${tenantId}`).then(res => res.data),
};

// ==================== TASK API (Melhorado) ====================

export const taskApi = {
  create: (data: Record<string, unknown>) =>
    api.post<Task>('/tasks', mapTaskForApi(data)).then(res => mapTaskForUi(res.data)),

  list: (projectId?: string, tenantId?: string) => {
    const params = new URLSearchParams();

    if (projectId?.trim()) {
      params.append('projectId', projectId);
    } else if (tenantId?.trim()) {
      params.append('tenantId', tenantId);
    }

    const queryString = params.toString() ? `?${params.toString()}` : '';

    return api.get<Task[]>(`/tasks${queryString}`).then(res => {
      const normalized = (res.data ?? []).map(mapTaskForUi);
      if (tenantId?.trim()) {
        return normalized.filter(task => task.tenantId === tenantId);
      }
      return normalized;
    });
  },

  get: (id: string) =>
    api.get<Task>(`/tasks/${id}`).then(res => mapTaskForUi(res.data)),

  update: (id: string, data: Record<string, unknown>) =>
    api.patch<Task>(`/tasks/${id}`, mapTaskForApi(data)).then(res => mapTaskForUi(res.data)),

  delete: (id: string) =>
    api.delete<void>(`/tasks/${id}`).then(res => res.data),
};

// ==================== COMMUNICATION APIS ====================

const commRequest = createRequest(commApi);

export const channelApi = {
  create: (data: Record<string, unknown>) => commRequest<Channel>('/channels', 'POST', data),
  list: (userId: string) => commRequest<Channel[]>(`/channels?userId=${userId}`),
  get: (channelId: string) => commRequest<Channel>(`/channels/${channelId}`),
};

export const messageApi = {
  send: (data: any) => commRequest<Message>('/messages', 'POST', data),
  list: (channelId: string) => commRequest<Message[]>(`/messages/${channelId}`),
  edit: (messageId: string, content: string) => commRequest<void>(`/messages/${messageId}/edit`, 'POST', { content }),
  delete: (messageId: string) => commRequest<void>(`/messages/${messageId}/delete`, 'POST'),
  pin: (messageId: string) => commRequest<void>(`/messages/${messageId}/pin`, 'POST'),
  unpin: (messageId: string) => commRequest<void>(`/messages/${messageId}/unpin`, 'POST'),
  react: (messageId: string, emoji: string, userId: string) =>
    commRequest<void>(`/messages/${messageId}/reactions`, 'POST', { emoji, userId }),
};

export const notificationApi = {
  list: (userId: string) => commRequest<Notification[]>(`/notifications?userId=${userId}`),
  markRead: (notificationId: string) => commRequest<void>(`/notifications/${notificationId}/read`, 'POST'),
  markAllRead: (userId: string) => commRequest<void>('/notifications/read-all', 'POST', { userId }),
};

// ==================== VIDEO / MEETINGS ====================

const videoRequest = createRequest(videoApi);

export const meetingApi = {
  // Listar todas as reuniões (principal)
  list: (tenantId?: string) =>
    videoApi
      .get<Meeting[]>('/meetings', { params: tenantId ? { tenantId } : undefined })
      .then(res => res.data),

  create: (data: Record<string, unknown>) => 
    videoRequest<Meeting>('/meetings', 'POST', data),

  get: (id: string) => videoRequest<Meeting>(`/meetings/${id}`),

  getToken: (meetingId: string, data: any) => 
    videoRequest<{ token: string }>(`/meetings/${meetingId}/token`, 'POST', data),

  end: (id: string) => videoRequest<void>(`/meetings/${id}/end`, 'PATCH'),

  summary: (id: string) => videoRequest<MeetingSummary>(`/meetings/${id}/summary`),

  recording: (id: string) => videoRequest<{ recordingUrl: string }>(`/meetings/${id}/recording`),
};

// ==================== INVITATIONS & USERS ====================
export const invitationApi = {
  create: (data: { email: string; fullName: string; role: string; projectId?: string; teamName?: string }) =>
    api
      .post<{
        token: string;
        inviteUrl: string;
        teamId: string;
        teamName: string;
        role: string;
        email: string | null;
        expiresAt: string;
      }>('/team/invite-link', {
        teamName: data.teamName || data.fullName,
        email: data.email,
        role: data.role,
      })
      .then(res => res.data)
      .catch(async (error) => {
        const status = error?.response?.status;
        if (status !== 404) throw error;
        const fallback = await api.post<Invitation>('/invitations', data);
        return fallback.data;
      })
};

export const teamApi = {
 
  createInviteLink: (data: {
    teamId?: string;
    teamName?: string;
    description?: string;
    email?: string;
    role?: 'admin' | 'manager' | 'member' | 'viewer' | 'guest';
    expiresInDays?: number;
  }) =>
    api
      .post<{
        token: string;
        inviteUrl: string;
        teamId: string;
        teamName: string;
        role: string;
        email: string | null;
        expiresAt: string;
      }>('/invitations', data),   

  joinByInviteToken: (
    token: string,
    data: { email?: string; fullName?: string; password?: string },
  ) =>
    api
      .post<{
        joined: boolean;
        teamId: string;
        teamName: string;
        userId: string;
        email: string;
        tenantId: string;
        role: string;
      }>(`/team/join/${token}`, data)
      .then(res => res.data),
};

export const userApi = {
  list: () => api.get<TeamMember[]>('/users').then(res => res.data),
  get: (id: string) => api.get<TeamMember>(`/users/${id}`).then(res => res.data),
  updateRole: (id: string, role: string) => api.patch<void>(`/users/${id}`, { role }).then(res => res.data),
  remove: (id: string) => api.delete<void>(`/users/${id}`).then(res => res.data),
};
// ==================== AUTH CHECK ====================

export function isAuthenticated(): boolean {
  return !!getAccessToken();
}

