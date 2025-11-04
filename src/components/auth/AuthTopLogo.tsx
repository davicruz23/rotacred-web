import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const AuthTopLogo = () => {
  const darkMode = useAppSelector((state) => state.theme.isDark);
  return (
    <>
      <div className="logo">
        <a href="#">
          {darkMode ? (
            <img src="/img/core-img/logo.png" alt="logo" />
          ) : (
            <img src="/img/core-img/logo-white.png" alt="logo" />
          )}
        </a>
      </div>
      <Link to="/">
        <i className="fa-duotone fa-house-chimney"></i>
      </Link>
    </>
  );
};
export default AuthTopLogo;
