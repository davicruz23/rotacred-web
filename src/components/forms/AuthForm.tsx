import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

type Props = {
  register?: boolean;
};

const AuthForm = ({ register }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        cpf: username,
        password: password,
      });

      const token = response.data.token;

      const payload = JSON.parse(atob(token.split('.')[1]));
      const userRole = payload.role;

      const allowedRoles = ["ROLE_SUPERADMIN", "ROLE_FUNCIONARIO"];

      if (!allowedRoles.includes(userRole)) {
        setError("Seu usuário não tem permissão para acessar este sistema");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/inicio");

    } catch (error: any) {
      console.error(error);
      setError(error.response?.data?.message || "CPF/Senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="fa-regular fa-user"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder={register ? "Full Name" : "CPF / Usuário"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />
      </div>

      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="fa-regular fa-lock"></i>
        </span>
        <input
          type={passwordVisible ? "text" : "password"}
          className="form-control rounded-end"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        <a role="button" className="password-show" onClick={togglePasswordVisibility}>
          <i className="fa-duotone fa-eye"></i>
        </a>
      </div>
      {error && (
        <div className="alert alert-danger mb-3" role="alert">
          <i className="fa-solid fa-triangle-exclamation me-2"></i>
          {error}
        </div>
      )}

      {!register && (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="loginCheckbox" />
            <label className="form-check-label text-white" htmlFor="loginCheckbox">
              Lembrar de mim
            </label>
          </div>
          <Link to="/reset-password" className="text-white fs-14">
            Esqueceu a senha?
          </Link>
        </div>
      )}
      <button 
        type="submit" 
        className="btn btn-primary w-100 login-btn"
        disabled={!isFormValid || loading}
      >
        {loading ? (
          <>
            <i className="fa-solid fa-spinner fa-spin me-2"></i>
            Entrando...
          </>
        ) : (
          "Entrar"
        )}
      </button>
    </form>
  );
};

export default AuthForm;