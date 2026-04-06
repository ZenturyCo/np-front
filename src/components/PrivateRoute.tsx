import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/auth.store';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, accessToken } = useAuthStore();
  const location = useLocation();

  if (!accessToken || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.onboardingComplete && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}
