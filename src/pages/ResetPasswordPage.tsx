import { Link } from "react-router-dom";
import AuthTopLogo from "../components/auth/AuthTopLogo";
import { useAppSelector } from "../redux/hooks";

const ResetPasswordPage = () => {
  const darkMode = useAppSelector((state) => state.theme.isDark);

  return (
    <main
      className={`home-call-center ${darkMode ? "dark-theme" : "light-theme"}`}
    >
      <div className="main-content login-panel">
        <div className="login-body">
          <div className="top d-flex justify-content-between align-items-center">
            <AuthTopLogo />
          </div>
          <div className="bottom">
            <h3 className="panel-title">Reset Password</h3>
            <form>
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username or email address"
                />
              </div>
              <button className="btn btn-primary w-100 login-btn">
                Get Link
              </button>
            </form>
            <div className="other-option">
              <p className="mb-0">
                Remember the password? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ResetPasswordPage;
