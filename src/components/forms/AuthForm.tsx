import { useState } from "react";
import { Link } from "react-router-dom";
type Props = {
  register?: boolean;
};
const AuthForm = ({ register }: Props) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <form>
      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="fa-regular fa-user"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder={register ? "Full Name" : "Username or email address"}
        />
      </div>
      {register && (
        <div className="input-group mb-4">
          <span className="input-group-text">
            <i className="fa-regular fa-envelope"></i>
          </span>
          <input type="email" className="form-control" placeholder="Email" />
        </div>
      )}
      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="fa-regular fa-lock"></i>
        </span>
        <input
          type={passwordVisible ? "text" : "password"}
          className="form-control rounded-end"
          placeholder="Password"
        />
        <a
          role="button"
          className="password-show"
          onClick={togglePasswordVisibility}
        >
          <i className="fa-duotone fa-eye"></i>
        </a>
      </div>
      <div
        className={`d-flex ${
          register ? "justify-content-center" : "justify-content-between"
        } align-items-center mb-4`}
      >
        {register ? (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="loginCheckbox"
            />
            <label
              className="form-check-label text-white"
              htmlFor="loginCheckbox"
            >
              I agree{" "}
              <a href="#" className="text-white text-decoration-underline">
                Terms & Policy
              </a>
            </label>
          </div>
        ) : (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheckbox"
              />
              <label
                className="form-check-label text-white"
                htmlFor="loginCheckbox"
              >
                Remember Me
              </label>
            </div>
            <Link to="/reset-password" className="text-white fs-14">
              Forgot Password?
            </Link>
          </>
        )}
      </div>
      <button className="btn btn-primary w-100 login-btn">Sign in</button>
    </form>
  );
};
export default AuthForm;
