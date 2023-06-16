import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setToken("This is the test token");
        navigate("/", { replace: true });
    };

    setTimeout(() => {
        handleLogin();
    }, 3 * 1000); // 3 seconds
  return (
    <>Login</>
  )
}

export default Login