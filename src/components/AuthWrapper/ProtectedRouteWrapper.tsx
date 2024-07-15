import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function ProtectedRouteWrapper({ children }: { children: JSX.Element }){
    const auth = useAuth();
    return auth?.isLoggedIn ? children : <Navigate to="/login" replace />;
  };