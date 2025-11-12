import { Navigate, Outlet } from "react-router-dom";

// ✅ Função para verificar se token expirou
const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now(); // Verifica se expirou
  } catch {
    return true; // Se der erro, considera expirado
  }
};

// ✅ Verifica apenas autenticação
const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  console.log("token :"+token)

  const isValidToken = token &&
    token !== "undefined" &&
    token !== "null" &&
    token !== "" &&
    !isTokenExpired(token); // ← AGORA VERIFICA EXPIRAÇÃO

  if (!isValidToken) {
    localStorage.removeItem("token"); // Remove token inválido
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

// ✅ Verifica autenticação + role específica
const RoleRoute = ({ roles }: { roles: string[] }) => {
  const token = localStorage.getItem("token");

  const isValidToken = token &&
    token !== "undefined" &&
    token !== "null" &&
    token !== "" &&
    !isTokenExpired(token); // ← AGORA VERIFICA EXPIRAÇÃO

  if (!isValidToken) {
    localStorage.removeItem("token"); // Remove token inválido
    return <Navigate to="/login" replace />;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const userRole = payload.role;

    if (!roles.includes(userRole)) {
      return <Navigate to="/error-403" replace />;
    }

    return <Outlet />;

  } catch (error) {
    console.error("Erro ao decodificar token:", error);
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
};

export { PrivateRoute, RoleRoute };