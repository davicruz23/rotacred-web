import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const token = localStorage.getItem("token");

  // Verifica se o token é válido
  const isValidToken = token && 
                      token !== "undefined" && 
                      token !== "null" && 
                      token !== "";

  if (!isValidToken) {
    return <Outlet />;
  }

  // Se tem token válido, redireciona para início
  return <Navigate to="/inicio" replace />;
};

export default GuestRoute;