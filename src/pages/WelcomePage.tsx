import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
const WelcomePage = () => {
  const darkMode = useAppSelector((state) => state.theme.isDark);
  return (
    <main
      className={`home-call-center ${darkMode ? "dark-theme" : "light-theme"}`}
    >
      <div className="main-content login-panel welcome-panel">
        <div className="static-body my-5">
          <div className="panel bg-transparent">
            <div className="panel-body">
              <div className="logo d-flex justify-content-center">
                {darkMode ? (
                  <img src="/img/core-img/logo.png" alt="logo" />
                ) : (
                  <img src="/img/core-img/logo-white.png" alt="logo" />
                )}
              </div>
              <div className="part-txt text-center">
                <h2>Welcome to Digiboard</h2>
                <p>
                  A great name is like a great story. It's one that people want
                  to hear again and again.
                </p>
                <Link to="/" className="btn btn-primary px-3">
                  Go To Dashboard
                </Link>
              </div>
              <div className="part-img w-50 m-auto">
                <img src="/img/bg-img/welcome-img.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default WelcomePage;
