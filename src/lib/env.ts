const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, '');

const fromEnv = (value: string | undefined, fallback: string): string => {
  const candidate = value?.trim();
  if (!candidate) return fallback;
  return trimTrailingSlash(candidate);
};

export const FRONTEND_ENV = {
  apiBaseUrl: fromEnv(import.meta.env.VITE_API_BASE_URL, 'http://api.drucci.pt/api/v1'),
  communicationBaseUrl: fromEnv(import.meta.env.VITE_COMM_BASE_URL, 'http://api.drucci.pt:3004'),
  videoBaseUrl: fromEnv(import.meta.env.VITE_VIDEO_BASE_URL, 'http://api.drucci.pt:3005/api/v1'),
  socketUrl: fromEnv(import.meta.env.VITE_SOCKET_URL, 'http://api.drucci.pt:3004'),
  livekitUrl: fromEnv(import.meta.env.VITE_LIVEKIT_URL, 'ws://api.drucci.pt:7880'),
};

export const VIDEO_HOST = FRONTEND_ENV.videoBaseUrl.replace(/\/api\/v1$/, '');
