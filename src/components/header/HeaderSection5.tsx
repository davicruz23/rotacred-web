import NavigationSection from "../navigation/NavigationSection";
import { useEffect, useRef, useState } from "react";
type Props = {
  toggleSidebarOpen: () => void;
};
const HeaderSection5 = ({ toggleSidebarOpen }: Props) => {
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const dropdownRef = useRef<HTMLUListElement>(null);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  // sidebar
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
  return (
    <header className="top-header-area">
      <div className="container h-100 d-flex align-items-center justify-content-between">
        <div className="left-side-content-area d-flex align-items-center">
          <div
            className="mobile-menu-icon d-md-none me-2"
            id="mobileMenuIcon"
            role="button"
            onClick={toggleSidebarOpen}
          >
            <i className="ti ti-menu-deep"></i>
          </div>

          <div className="top-bar-text d-none d-md-block me-4 me-xl-5">
            <h4 className="mb-0">Dashboard</h4>
          </div>

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

        <div className="right-side-navbar d-flex align-items-center justify-content-end">
          <ul className="ps-0 right-side-content d-flex align-items-center">
            <div className="top-search-bar">
              <form action="#" method="get">
                <input
                  type="search"
                  name="search"
                  className="from-control top-search mb-0"
                  placeholder="Pesquisar"
                />
                <button type="submit" className="">
                  <img src="/img/icons/search.svg" alt="" />
                </button>
              </form>
            </div>
            <ul className="ota-header-left-actions d-flex" ref={dropdownRef}>
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className={`btn dropdown-toggle ${
                    activeDropdown === "chat" ? "show" : ""
                  }`}
                  onClick={() => toggleDropdown("chat")}
                >
                  <img src="/img/icons/message-text.svg" alt="" />
                </button>

                <div
                  className={`dropdown-menu notifications-box dropdown-menu-end ${
                    activeDropdown === "chat" ? "show" : ""
                  }`}
                >
                  <a href="#" className="dropdown-item">
                    <i className="ti ti-percentage"></i>
                    <span>Your commissions has been sent</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="ti ti-heart bg-success"></i>
                    <span>You sold an item!</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="ti ti-alert-triangle bg-warning"></i>
                    <span>Security alert for your linked Google account</span>
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <button
                  type="button"
                  className={`btn dropdown-toggle ${
                    activeDropdown === "notification" ? "show" : ""
                  }`}
                  onClick={() => toggleDropdown("notification")}
                >
                  <img src="/img/icons/notification-bing.svg" alt="" />
                </button>

                <div
                  className={`dropdown-menu dropdown-menu-end ${
                    activeDropdown === "notification" ? "show" : ""
                  }`}
                >
                  <div className="notifications-box" id="notificationsBox">
                    <a href="#" className="dropdown-item">
                      <i className="ti ti-box bg-success"></i>
                      <span>We've got something for you!</span>
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="ti ti-alert-triangle bg-danger"></i>
                      <span>Domain names expiring on Tuesday</span>
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="ti ti-percentage"></i>
                      <span>Your commissions has been sent</span>
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="ti ti-alert-triangle bg-warning"></i>
                      <span>Security alert for your linked Google account</span>
                    </a>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <button
                  type="button"
                  className={`btn dropdown-toggle ${
                    activeDropdown === "profile" ? "show" : ""
                  }`}
                  onClick={() => toggleDropdown("profile")}
                >
                  <img src="/img/icons/profile.svg" alt="" />
                </button>

                <div
                  className={`dropdown-menu dropdown-menu-end ${
                    activeDropdown === "profile" ? "show" : ""
                  }`}
                >
                  <div className="user-profile-area">
                    <a href="#" className="dropdown-item">
                      <i className="ti ti-user"></i> My profile
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="ti ti-settings"></i> Account settings
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="ti ti-heart"></i> Support
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="ti ti-lock"></i> Logout
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default HeaderSection5;
