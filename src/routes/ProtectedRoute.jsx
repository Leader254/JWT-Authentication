import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default ProtectedRoute;