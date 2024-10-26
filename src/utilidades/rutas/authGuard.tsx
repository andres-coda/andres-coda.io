import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexto/authContext";
import { rutaPublica } from "./rutas";

export const AuthGuard = () => {

  const {authLogin} = useAuthContext()

  return authLogin ? <Outlet /> : <Navigate replace to={rutaPublica.LOGIN} />
}

export default AuthGuard;