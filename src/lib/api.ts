// ============================================================
// Ngola Projects — Centralized API Service (Axios + Auto Refresh)
// ============================================================
import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { FRONTEND_ENV } from '@/lib/env';

const API_BASE  = FRONTEND_ENV.apiBaseUrl;
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
  assigneeIds?: string[];
  dueDate?: string;
  startDate?: string;
  endDate?: string;
  projectName?: string;
  createdBy?: string;
  [key: string]: unknown;
}
export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'normal' | 'high' | 'urgent';

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
  accessPassword?: string;
  livekitRoomId?: string;
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
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
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
  role: 'admin' | 'manager' | 'member' | 'viewer' | 'guest' | string;
  presence?: 'online' | 'away' | 'offline' | string;
  completedTasks?: number;
  totalTasks?: number;
  onTimeRate?: number;
  projects?: Array<{ id: string; name: string }>;
  [key: string]: unknown;
}

export interface BackendTeam {
  id: string;
  name: string;
  description?: string;
  avatarColor?: string;
  createdAt?: string;
  tenantId?: string;
  [key: string]: unknown;
}

// ==================== ERROR CLASS ====================

export class ApiError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, message: string, body: unknown) {
    super(message);
    this.name  = 'ApiError';
    this.status = status;
    this.body   = body;
  }
}

// ==================== TOKEN HELPERS ====================

export const getAccessToken  = (): string | null => localStorage.getItem('accessToken');
const getRefreshToken = (): string | null => localStorage.getItem('refreshToken');

export const setTokens = (accessToken: string, refreshToken: string): void => {
  localStorage.setItem('accessToken',  accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const clearTokens = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

// ==================== AXIOS INSTANCES ====================

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const commApi = axios.create({
  baseURL: COMM_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const videoApi = axios.create({
  baseURL: VIDEO_BASE,
  headers: { 'Content-Type': 'application/json' },
});

// ==================== REFRESH QUEUE (shared) ====================

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string | null) => void;
  reject:  (error: unknown)       => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null): void => {
  failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve(token)));
  failedQueue = [];
};

const refreshTokens = async (): Promise<string> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error('No refresh token');

  const { data } = await axios.post<{ accessToken: string; refreshToken: string }>(
    `${API_BASE}/auth/refresh`,
    { refreshToken },
  );

  setTokens(data.accessToken, data.refreshToken);

  const { useAuthStore } = await import('@/store/auth.store');
  useAuthStore.setState({
    accessToken:  data.accessToken,
    refreshToken: data.refreshToken,
  });

  return data.accessToken;
};

const redirectToLogin = async (): Promise<void> => {
  clearTokens();
  try {
    const { useAuthStore } = await import('@/store/auth.store');
    useAuthStore.setState({ accessToken: null, refreshToken: null, user: null });
  } catch { /* ignore */ }
  window.location.href = '/login';
};

// ==================== REQUEST INTERCEPTORS ====================

[api, commApi, videoApi].forEach((instance) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAccessToken();
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error),
  );
});

// ==================== RESPONSE INTERCEPTORS ====================

const attachResponseInterceptor = (instance: ReturnType<typeof axios.create>): void => {
  instance.interceptors.response.use(
    (res: AxiosResponse) => res,

    async (error: AxiosError) => {
      const original = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
      const requestUrl = original?.url ?? '';
      const isCredentialRequest =
        requestUrl.startsWith('/auth/login') ||
        requestUrl.startsWith('/auth/register') ||
        requestUrl.startsWith('/auth/refresh');

      if (error.response?.status !== 401 || original._retry || isCredentialRequest) {
        const msg  = (error.response?.data as any)?.message ?? error.message ?? 'Erro na requisição';
        throw new ApiError(error.response?.status ?? 500, msg, error.response?.data);
      }

      original._retry = true;

      if (isRefreshing) {
        return new Promise<string | null>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          if (token) original.headers.Authorization = `Bearer ${token}`;
          return instance(original);
        });
      }

      isRefreshing = true;

      try {
        const newToken = await refreshTokens();
        processQueue(null, newToken);
        original.headers.Authorization = `Bearer ${newToken}`;
        return instance(original);
      } catch (refreshError) {
        processQueue(refreshError, null);
        await redirectToLogin();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    },
  );
};

attachResponseInterceptor(api);
attachResponseInterceptor(commApi);
attachResponseInterceptor(videoApi);

// ==================== TASK NORMALIZATION ====================

const normalizeTaskStatus = (status?: string): string => {
  if (!status) return 'todo';
  if (status === 'backlog')   return 'todo';
  if (status === 'in_review') return 'review';
  return status;
};

const normalizeTaskPriority = (priority?: string): string => {
  if (!priority)               return 'normal';
  if (priority === 'critical') return 'urgent';
  if (priority === 'medium')   return 'normal';
  return priority;
};

const mapTaskForUi = (task: any): any => ({
  ...task,
  status:   normalizeTaskStatus(task.status),
  priority: normalizeTaskPriority(task.priority),
});

const mapTaskForApi = (task: any): any => ({
  ...task,
  status:   task?.status   === 'review' ? 'in_review' : task?.status,
  priority: task?.priority === 'urgent' ? 'critical'
          : task?.priority === 'normal' ? 'medium'
          : task?.priority,
});

// ==================== AUTH API ====================

export const authApi = {
  register: (data: any) =>
    api.post<{
      accessToken?: string;
      refreshToken?: string;
      tokens?: { accessToken: string; refreshToken: string };
    }>('/auth/register', data).then((r) => r.data),

  login: (data: any) =>
    api.post<{
      accessToken?: string;
      refreshToken?: string;
      tokens?: { accessToken: string; refreshToken: string };
      requireTwoFactor?: boolean;
      twoFactorRequired?: boolean;
      tempToken?: string;
      user?: unknown;
    }>('/auth/login', data).then((r) => r.data),

  refresh: (refreshToken: string) =>
    api.post<{ accessToken: string; refreshToken: string }>(
      '/auth/refresh', { refreshToken }
    ).then((r) => r.data),

  logout: (refreshToken: string) =>
    api.post<void>('/auth/logout', { refreshToken }).then((r) => r.data),

  enable2FA: () =>
    api.post<{ secret: string; otpauthUrl: string; qrCode?: string }>('/auth/2fa/enable').then((r) => {
      const qrCode = r.data.qrCode || (
        r.data.otpauthUrl
          ? `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(r.data.otpauthUrl)}`
          : undefined
      );
      return { ...r.data, qrCode };
    }),

  verify2FA: (code: string) =>
    api.post<{ verified: boolean; twoFactorEnabled: boolean }>('/auth/2fa/verify', { code }).then((r) => r.data),

  me: () =>
    api.get<{
      id: string;
      email: string;
      fullName: string;
      tenantId: string;
      role?: 'admin' | 'manager' | 'member';
      onboardingComplete?: boolean;
    }>('/me').then((r) => r.data),

  users: () =>
    api.get<Array<{ id: string; email: string; fullName: string }>>('/users').then((r) => r.data),

  updateMe: (data: Record<string, unknown>) =>
    api.patch<any>('/me', data).then((r) => r.data),

  changePassword: (currentPassword: string, newPassword: string) =>
    api.patch<void>('/auth/change-password', { currentPassword, newPassword }).then((r) => r.data),

  forgotPassword: (email: string) =>
    api.post<void>('/auth/forgot-password', { email }).then((r) => r.data),

  resetPassword: (token: string, newPassword: string) =>
    api.post<void>('/auth/reset-password', { token, newPassword }).then((r) => r.data),
};

// ==================== TENANT API ====================

export const tenantApi = {
  create:     (data: Record<string, unknown>) => api.post<{ id: string }>('/tenants', data).then((r) => r.data),
  onboarding: (data: Record<string, unknown>) => api.post<{ id: string }>('/tenants/onboarding', data).then((r) => r.data),
  list:       ()                              => api.get<Array<{ id: string; name: string }>>('/tenants').then((r) => r.data),
  get:        (id: string)                   => api.get<{ id: string; name: string }>(`/tenants/${id}`).then((r) => r.data),
  update:     (id: string, data: Record<string, unknown>) => api.patch<void>(`/tenants/${id}`, data).then((r) => r.data),
  delete:     (id: string)                   => api.delete<void>(`/tenants/${id}`).then((r) => r.data),
};

// ==================== PROJECT API ====================

export const projectApi = {
  createTemplate: (data: Record<string, unknown>) =>
    api.post<{ id: string }>('/projects/templates', data).then((r) => r.data),

  listTemplates: (industry?: string) =>
    api.get<Array<{ id: string; name: string; industry: string }>>(
      `/projects/templates${industry ? `?industry=${industry}` : ''}`
    ).then((r) => r.data),

  create: (data: Record<string, unknown>) =>
    api.post<Project>('/projects', data).then((r) => r.data),

  list: (tenantId: string) =>
    api.get<any[]>(`/projects?tenantId=${tenantId}`).then((r) =>
      r.data.map((p) => ({
        ...p,
        rawStatus: p.status,
        industry:  p.industryVertical,
        deadline:  p.dueDate,
        progress:  p.progressPercent,
        status:
          p.status === 'planning'  ? 'Activo'
        : p.status === 'on_hold'   ? 'Pausado'
        : p.status === 'completed' ? 'Concluído'
        : 'Activo',
      }))
    ),

  get:    (id: string)                               => api.get<Project>(`/projects/${id}`).then((r) => r.data),
  update: (id: string, data: Record<string, unknown>) => api.patch<Project>(`/projects/${id}`, data).then((r) => r.data),
  delete: (id: string)                               => api.delete<void>(`/projects/${id}`).then((r) => r.data),
};

// ==================== PHASE API ====================

export const phaseApi = {
  create: (data: Record<string, unknown>) => api.post<Phase>('/phases', data).then((r) => r.data),
  list:   (projectId: string)             => api.get<Phase[]>(`/phases?projectId=${projectId}`).then((r) => r.data),
  update: (id: string, data: Record<string, unknown>) => api.patch<Phase>(`/phases/${id}`, data).then((r) => r.data),
  delete: (id: string)                    => api.delete<void>(`/phases/${id}`).then((r) => r.data),
};

// ==================== LABEL API ====================

export const labelApi = {
  create: (data: Record<string, unknown>) => api.post<Label>('/labels', data).then((r) => r.data),
  list:   (tenantId: string)              => api.get<Label[]>(`/labels?tenantId=${tenantId}`).then((r) => r.data),
};

// ==================== TASK API ====================

export const taskApi = {
  create: (data: Record<string, unknown>) =>
    api.post<Task>('/tasks', mapTaskForApi(data)).then((r) => mapTaskForUi(r.data)),

  list: (projectId?: string, tenantId?: string) => {
    const params = new URLSearchParams();
    if (projectId?.trim())     params.append('projectId', projectId);
    else if (tenantId?.trim()) params.append('tenantId',  tenantId);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return api.get<Task[]>(`/tasks${qs}`).then((r) => {
      const normalized = (r.data ?? []).map(mapTaskForUi);
      return tenantId?.trim()
        ? normalized.filter((t) => t.tenantId === tenantId)
        : normalized;
    });
  },

  get:    (id: string)                               => api.get<Task>(`/tasks/${id}`).then((r) => mapTaskForUi(r.data)),
  update: (id: string, data: Record<string, unknown>) => api.patch<Task>(`/tasks/${id}`, mapTaskForApi(data)).then((r) => mapTaskForUi(r.data)),
  delete: (id: string)                               => api.delete<void>(`/tasks/${id}`).then((r) => r.data),
};

// ==================== CHANNEL API ====================

export const channelApi = {
  list: (userId?: string): Promise<Channel[]> =>
    commApi.get<Channel[]>('/channels', {
      params: userId ? { userId } : undefined,
    }).then((r) => r.data),

  create: (data: Record<string, unknown>): Promise<Channel> =>
    commApi.post<Channel>('/channels', data).then((r) => r.data),

  get: (channelId: string): Promise<Channel> =>
    commApi.get<Channel>(`/channels/${channelId}`).then((r) => r.data),
};

// ==================== MESSAGE API ====================

export const messageApi = {
  list: (channelId: string): Promise<Message[]> =>
    commApi.get<Message[]>(`/messages/${channelId}`).then((r) => r.data),

  send: (data: { channelId: string; senderId: string; content: string; [key: string]: unknown }): Promise<Message> =>
    commApi.post<Message>(`/messages`, data).then((r) => r.data),

  edit:   (messageId: string, content: string): Promise<void> =>
    commApi.post<void>(`/messages/${messageId}/edit`, { content }).then((r) => r.data),

  delete: (messageId: string): Promise<void> =>
    commApi.post<void>(`/messages/${messageId}/delete`).then((r) => r.data),

  pin:    (messageId: string): Promise<void> =>
    commApi.post<void>(`/messages/${messageId}/pin`).then((r) => r.data),

  unpin:  (messageId: string): Promise<void> =>
    commApi.post<void>(`/messages/${messageId}/unpin`).then((r) => r.data),

  react:  (messageId: string, emoji: string, userId: string): Promise<void> =>
    commApi.post<void>(`/messages/${messageId}/reactions`, { emoji, userId }).then((r) => r.data),
};

// ==================== NOTIFICATION API ====================

export const notificationApi = {
  list: (): Promise<Notification[]> =>
    commApi.get<Notification[]>('/notifications').then((r) => r.data),

  markRead: (notificationId: string): Promise<void> =>
    commApi.patch<void>(`/notifications/${notificationId}/read`).then((r) => r.data),

  markAllRead: (): Promise<void> =>
    commApi.post<void>('/notifications/read-all').then((r) => r.data),
};

// ==================== MEETINGS / VIDEO API ====================

export const meetingApi = {
  list: (tenantId?: string): Promise<Meeting[]> =>
    videoApi.get<Meeting[]>('/meetings', {
      params: tenantId ? { tenantId } : undefined,
    }).then((r) => r.data),

  create: (data: Record<string, unknown>): Promise<Meeting & { accessPassword?: string }> =>
    videoApi.post<Meeting>('/meetings', data).then((r) => r.data),

  get: (id: string): Promise<Meeting> =>
    videoApi.get<Meeting>(`/meetings/${id}`).then((r) => r.data),

  getToken: (
    meetingId: string,
    data: { userId: string; name?: string; role?: 'host' | 'presenter' | 'viewer' },
  ): Promise<{ token: string }> =>
    videoApi.post<{ token: string }>(`/meetings/${meetingId}/token`, data).then((r) => r.data),

  end: (id: string): Promise<void> =>
    videoApi.patch<void>(`/meetings/${id}/end`).then((r) => r.data),

  summary:   (id: string): Promise<MeetingSummary>             => videoApi.get<MeetingSummary>(`/meetings/${id}/summary`).then((r) => r.data),
  recording: (id: string): Promise<{ recordingUrl: string }>   => videoApi.get<{ recordingUrl: string }>(`/meetings/${id}/recording`).then((r) => r.data),
};

// ==================== INVITATIONS ====================
// ✅ invitationApi mantido para compatibilidade com outros componentes

export const invitationApi = {
  create: (data: {
    email: string;
    fullName: string;
    role: string;
    projectId?: string;
    teamName?: string;
  }): Promise<Invitation> =>
    api.post<Invitation>('/team/invite-link', {
      teamName: data.teamName ?? data.fullName,
      email:    data.email,
      role:     data.role,
    })
    .then((r) => r.data)
    .catch(async (error) => {
      if (error?.response?.status !== 404) throw error;
      return api.post<Invitation>('/invitations', data).then((r) => r.data);
    }),
};

// ==================== TEAMS API ====================
// ✅ teamApi unificado — remove duplicação entre teamApi e teamsApi anteriores

export interface Team {
  id: string;
  tenantId: string;
  name: string;
  description?: string;
  color?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  members: TeamMember[];
}

export interface ProjectTeam {
  projectId: string;
  teamId: string;
  teamName?: string;
  role: string;
  assignedAt: string;
  members?: TeamMember[];
}

export const teamsApi = {
  // GET /teams
  list: (tenantId?: string): Promise<Team[]> =>
    api.get<Team[]>(`/teams${tenantId ? `?tenantId=${tenantId}` : ""}`).then((r) => r.data),

  // GET /teams/:id
  get: (teamId: string): Promise<Team> =>
    api.get<Team>(`/teams/${teamId}`).then((r) => r.data),

  // POST /teams
  create: (data: { tenantId: string; name: string; description?: string; color?: string; createdBy: string; memberIds?: string[] }): Promise<Team> =>
    api.post<Team>("/teams", data).then((r) => r.data),

  // PATCH /teams/:id
  update: (teamId: string, data: Partial<{ name: string; description: string; color: string }>): Promise<Team> =>
    api.patch<Team>(`/teams/${teamId}`, data).then((r) => r.data),

  // DELETE /teams/:id
  delete: (teamId: string): Promise<{ deleted: boolean }> =>
    api.delete<{ deleted: boolean }>(`/teams/${teamId}`).then((r) => r.data),

  // GET /teams/:teamId/members
  members: (teamId: string): Promise<TeamMember[]> =>
    api.get<TeamMember[]>(`/teams/${teamId}/members`).then((r) => r.data),

  // POST /teams/:teamId/members
  addMember: (teamId: string, userId: string, role?: string): Promise<TeamMember[]> =>
    api.post<TeamMember[]>(`/teams/${teamId}/members`, { userId, role }).then((r) => r.data),

  // DELETE /teams/:teamId/members/:userId
  removeMember: (teamId: string, userId: string): Promise<{ removed: boolean }> =>
    api.delete<{ removed: boolean }>(`/teams/${teamId}/members/${userId}`).then((r) => r.data),

  // GET /teams/:teamId/tasks
  tasks: (teamId: string): Promise<Task[]> =>
    api.get<Task[]>(`/teams/${teamId}/tasks`).then((r) => r.data.map(mapTaskForUi)),

  // GET /projects/:projectId/teams
  projectTeams: (projectId: string): Promise<ProjectTeam[]> =>
    api.get<ProjectTeam[]>(`/projects/${projectId}/teams`).then((r) => r.data),

  // POST /projects/:projectId/teams
  addToProject: (projectId: string, teamId: string, role?: string): Promise<ProjectTeam[]> =>
    api.post<ProjectTeam[]>(`/projects/${projectId}/teams`, { teamId, role }).then((r) => r.data),

  // DELETE /projects/:projectId/teams/:teamId
  removeFromProject: (projectId: string, teamId: string): Promise<{ removed: boolean }> =>
    api.delete<{ removed: boolean }>(`/projects/${projectId}/teams/${teamId}`).then((r) => r.data),

  // POST /team/invite-link (legacy)
  createInviteLink: (data: {
    teamId?:        string;
    teamName?:      string;
    description?:   string;
    email?:         string;
    role?:          string;
    expiresInDays?: number;
  }): Promise<{
    token: string; inviteUrl: string; teamId: string;
    teamName: string; role: string; email: string | null; expiresAt: string;
  }> =>
    api.post("/team/invite-link", data).then((r) => r.data),

  // POST /team/join/:token (legacy)
  joinByToken: (
    token: string,
    data: { email?: string; fullName?: string; password?: string },
  ): Promise<{ joined: boolean; teamId: string; teamName: string; userId: string }> =>
    api.post(`/team/join/${token}`, data).then((r) => r.data),

  // POST /team/invite-link
  createInviteLink: (data: {
    teamId?:        string;
    teamName?:      string;
    description?:   string;
    email?:         string;
    role?:          'admin' | 'manager' | 'member' | 'viewer' | 'guest';
    expiresInDays?: number;
  }): Promise<{
    token: string; inviteUrl: string; teamId: string;
    teamName: string; role: string; email: string | null; expiresAt: string;
  }> =>
    api.post('/team/invite-link', data).then((r) => r.data),

  // POST /team/join/:token
  joinByToken: (
    token: string,
    data: { email?: string; fullName?: string; password?: string },
  ): Promise<{ joined: boolean; teamId: string; teamName: string; userId: string }> =>
    api.post(`/team/join/${token}`, data).then((r) => r.data),
};

// ✅ teamApi mantido como alias para não quebrar imports existentes noutros ficheiros
export const teamApi = {
  createInviteLink: teamsApi.createInviteLink,
  joinByInviteToken: (token: string, data: { email?: string; fullName?: string; password?: string }) =>
    teamsApi.joinByToken(token, data),
};

// ==================== USERS ====================

export const userApi = {
  list:       ()                             => api.get<TeamMember[]>('/users').then((r) => r.data),
  get:        (id: string)                  => api.get<TeamMember>(`/users/${id}`).then((r) => r.data),
  updateRole: (id: string, role: string)    => api.patch<void>(`/users/${id}`, { role }).then((r) => r.data),
  remove:     (id: string)                  => api.delete<void>(`/users/${id}`).then((r) => r.data),
};

// ==================== AI API ====================

export interface ChatMessageDto {
  projectId?: string;
  message: string;
  // Opcional: histórico completo ou só última mensagem
  history?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatResponse {
  response: string;
  projectId?: string;
  usage?: {
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
  };
  // outros campos que o ai-service retornar
}

export const aiApi = {
  /**
   * Envia mensagem para IA
   */
  chat: (data: ChatMessageDto): Promise<ChatResponse> =>
    api.post<ChatResponse>('/ai/chat', data).then((r) => r.data),

  /**
   * Limpa histórico de conversa de um projeto
   */
  clearHistory: (projectId: string): Promise<{ success: boolean }> =>
    api.delete<{ success: boolean }>(`/ai/chat/${projectId}/history`).then((r) => r.data),

  /**
   * Health check do serviço de IA
   */
  health: (): Promise<{ service: string; status: string; timestamp?: string }> =>
    api.get('/ai/health').then((r) => r.data),
};

// ==================== AUTH GUARD ====================

export const isAuthenticated = (): boolean => !!getAccessToken();