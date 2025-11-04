import { Link } from "react-router-dom";
import NavigationSection from "../navigation/NavigationSection";
import HeaderRightSideAction from "./HeaderRightSideAction";
import { useEffect, useRef, useState } from "react";
type Props = {
  headerStyle?: string;
};
const HeaderSection = ({ headerStyle }: Props) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`top-header-area ${headerStyle ? headerStyle : ""} ${
        isHeaderFixed ? "header-sticky" : ""
      }`}
      id="stickyHeader"
    >
      <div className="container h-100 d-flex align-items-center justify-content-between">
        <div className="left-side-content-area d-flex align-items-center">
          <Link className="crm-logo me-2 me-sm-4 me-xl-5" to="/">
            <img
              className="light-mode-logo"
              src="/img/core-img/logo-white.png"
              alt="logo"
            />
            <img
              className="dark-mode-logo"
              src="/img/core-img/logo.png"
              alt="logo"
            />
          </Link>

          <div className="me-2 classy-nav-container" ref={sidebarRef}>
            <nav className="classy-navbar justify-content-between" id="topNav">
              <div
                className="classy-navbar-toggler"
                role="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className="navbarToggler">
                  <i className="ti ti-selector"></i>
                </span>
              </div>

              <div className={`classy-menu ${sidebarOpen ? "menu-on" : ""}`}>
                <div
                  className="classycloseIcon"
                  role="button"
                  onClick={() => setSidebarOpen(false)}
                >
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>

                <NavigationSection />
              </div>
            </nav>
          </div>
        </div>

        <HeaderRightSideAction />
      </div>
    </header>
  );
};
export default HeaderSection;
