import { useEffect, useRef, useState } from "react";
type Props = {
  toggleSidebarOpen: () => void;
};
const HeaderSection2 = ({ toggleSidebarOpen }: Props) => {
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);

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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
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
      className={`top-header-area d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-between  ${
        isHeaderFixed ? "header-sticky" : ""
      }`}
      id="stickyHeader"
    >
      <div className="left-side-content-area d-flex align-items-center justify-content-between">
        <div
          className="mobile-menu-icon d-md-none"
          id="mobileMenuIcon"
          role="button"
          onClick={toggleSidebarOpen}
        >
          <i className="ti ti-menu-deep"></i>
        </div>

        <div className="help-line-info">
          <button className="btn btn-primary d-flex align-items-center">
            <i className="ti ti-calendar"></i>
            <span className="d-none d-lg-inline">{currentDate}</span>
          </button>

          <button className="btn btn-light d-flex align-items-center">
            <svg
              className="me-lg-2"
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M31.952 27.128C31.952 27.704 31.824 28.296 31.552 28.872C31.28 29.448 30.928 29.992 30.464 30.504C29.68 31.368 28.816 31.992 27.84 32.392C26.88 32.792 25.84 33 24.72 33C23.088 33 21.344 32.616 19.504 31.832C17.664 31.048 15.824 29.992 14 28.664C12.16 27.32 10.416 25.832 8.752 24.184C7.104 22.52 5.616 20.776 4.288 18.952C2.976 17.128 1.92 15.304 1.152 13.496C0.384 11.672 0 9.928 0 8.264C0 7.176 0.192 6.136 0.576 5.176C0.96 4.2 1.568 3.304 2.416 2.504C3.44 1.496 4.56 1 5.744 1C6.192 1 6.64 1.096 7.04 1.288C7.456 1.48 7.824 1.768 8.112 2.184L11.824 7.416C12.112 7.816 12.32 8.184 12.464 8.536C12.608 8.872 12.688 9.208 12.688 9.512C12.688 9.896 12.576 10.28 12.352 10.648C12.144 11.016 11.84 11.4 11.456 11.784L10.24 13.048C10.064 13.224 9.984 13.432 9.984 13.688C9.984 13.816 10 13.928 10.032 14.056C10.08 14.184 10.128 14.28 10.16 14.376C10.448 14.904 10.944 15.592 11.648 16.424C12.368 17.256 13.136 18.104 13.968 18.952C14.832 19.8 15.664 20.584 16.512 21.304C17.344 22.008 18.032 22.488 18.576 22.776C18.656 22.808 18.752 22.856 18.864 22.904C18.992 22.952 19.12 22.968 19.264 22.968C19.536 22.968 19.744 22.872 19.92 22.696L21.136 21.496C21.536 21.096 21.92 20.792 22.288 20.6C22.656 20.376 23.024 20.264 23.424 20.264C23.728 20.264 24.048 20.328 24.4 20.472C24.752 20.616 25.12 20.824 25.52 21.096L30.816 24.856C31.232 25.144 31.52 25.48 31.696 25.88C31.856 26.28 31.952 26.68 31.952 27.128Z"
                fill="#252F4A"
              />
              <path
                d="M26.4 12.2C26.4 11.24 25.648 9.76798 24.528 8.56798C23.504 7.46398 22.144 6.59998 20.8 6.59998"
                stroke="#252F4A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.0001 12.2C32.0001 6.008 26.992 1 20.8 1"
                stroke="#252F4A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="btn-text d-none d-lg-block">
              <span className="d-block">Telephone</span>
              <span className="d-block">240 Calls</span>
            </div>
            <img alt="" className="shape-img" src="/img/icons/shape.svg" />
          </button>
        </div>
      </div>

      <div className="right-side-navbar d-flex align-items-center justify-content-between justify-content-md-end">
        <div className="top-search-bar">
          <form action="#" className="" method="get">
            <input
              className="from-control top-search mb-0"
              name="search"
              placeholder="Search"
              type="search"
            />
            <button className="" type="submit">
              <img alt="" src="/img/icons/search.svg" />
            </button>
          </form>
        </div>

        <ul
          className="ps-0 right-side-content d-flex align-items-center"
          ref={dropdownRef}
        >
          <li className="nav-item dropdown">
            <button className="btn dropdown-toggle" type="button">
              <img alt="" src="/img/icons/layer.svg" />
            </button>
          </li>

          <li className="nav-item dropdown">
            <button
              className={`btn dropdown-toggle ${
                activeDropdown === "notification" ? "show" : ""
              }`}
              type="button"
              onClick={() => toggleDropdown("notification")}
            >
              <img alt="" src="/img/icons/notification-status.svg" />
            </button>

            <div
              className={`dropdown-menu notifications-box dropdown-menu-end ${
                activeDropdown === "notification" ? "show" : ""
              }`}
            >
              <a className="dropdown-item" href="#">
                <i className="ti ti-box bg-success"></i>
                <span>We've got something for you!</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="ti ti-alert-triangle bg-danger"></i>
                <span>Domain names expiring on Tuesday</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="ti ti-percentage"></i>
                <span>Your commissions has been sent</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="ti ti-alert-triangle bg-warning"></i>
                <span>Security alert for your linked Google account</span>
              </a>
              <a href="#" className="btn btn-sm w-100 h-auto">
                View all <i className="ti ti-arrow-right"></i>
              </a>
            </div>
          </li>

          <li className="nav-item dropdown ms-2">
            <button
              className={`btn topbar-user-meta-data dropdown-toggle ${
                activeDropdown === "user-profile" ? "show" : ""
              }`}
              type="button"
              onClick={() => toggleDropdown("user-profile")}
            >
              <img alt="" src="/img/bg-img/user.png" />
            </button>

            <div
              className={`dropdown-menu dropdown-menu-end ${
                activeDropdown === "user-profile" ? "show" : ""
              }`}
            >
              <div className="user-profile-area">
                <a className="dropdown-item" href="#">
                  <i className="ti ti-user"></i> My profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti ti-settings"></i> Account settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti ti-heart"></i> Support
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti ti-lock"></i> Logout
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default HeaderSection2;
