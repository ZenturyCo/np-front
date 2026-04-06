import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PrivateRoute } from "@/components/PrivateRoute";
import { AppLayout } from "@/components/AppLayout";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Onboarding from "./pages/Onboarding";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Chat from "./pages/Chat";
import Meetings from "./pages/Meetings";
import Reports from "./pages/Reports";
import AIAssistant from "./pages/AIAssistant";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";
import RoomPage from "./pages/room";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* BrowserRouter com future flags para eliminar os warnings do React Router v7 */}
      <BrowserRouter
        future={{
          v7_startTransition: true,      // Usa React.startTransition para atualizações de estado
          v7_relativeSplatPath: true,    // Nova resolução de caminhos em rotas splat (*)
        }}
      >
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Onboarding */}
          <Route
            path="/onboarding"
            element={
              <PrivateRoute>
                <Onboarding />
              </PrivateRoute>
            }
          />

          <Route
            path="/meetings/room"
            element={
              <PrivateRoute>
                <RoomPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/meetings/:meetingId/room"
            element={
              <PrivateRoute>
                <RoomPage />
              </PrivateRoute>
            }
          />

          {/* Protected Routes com AppLayout */}
          <Route element={<PrivateRoute><AppLayout /></PrivateRoute>}>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/team" element={<Team />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/ai" element={<AIAssistant />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/plans" element={<Plans />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
