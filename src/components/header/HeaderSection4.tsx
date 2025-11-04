import { useEffect, useRef, useState } from "react";
type Props = {
  toggleSidebarOpen: () => void;
};
const HeaderSection4 = ({ toggleSidebarOpen }: Props) => {
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
      className={`top-header-area d-flex align-items-center justify-content-between ${
        isHeaderFixed ? "header-sticky" : ""
      }`}
      id="stickyHeader"
    >
      <div className="left-side-content-area d-flex align-items-center">
        <div
          className="mobile-menu-icon d-md-none"
          id="mobileMenuIcon"
          role="button"
          onClick={toggleSidebarOpen}
        >
          <i className="ti ti-menu-deep"></i>
        </div>

        <div className="top-bar-text d-none d-lg-block">
          <h4 className="mb-1">Dashboard</h4>
          <p className="mb-0">Home</p>
        </div>
      </div>

      <div className="right-side-navbar d-flex align-items-center justify-content-end">
        <ul className="ps-0 right-side-content d-flex align-items-center">
          <div className="top-search-bar">
            <form action="#" method="get">
              <input
                className="from-control top-search mb-0"
                name="search"
                placeholder="Search"
                type="search"
              />
              <button className="" type="submit">
                <svg
                  fill="none"
                  height="15"
                  viewBox="0 0 14 15"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0273 6.09848C12.0273 9.05221 9.51995 11.497 6.36364 11.497C3.20732 11.497 0.7 9.05221 0.7 6.09848C0.7 3.14476 3.20732 0.7 6.36364 0.7C9.51995 0.7 12.0273 3.14476 12.0273 6.09848Z"
                    stroke="#737B8B"
                    strokeWidth="1.4"
                  />
                  <line
                    stroke="#737B8B"
                    strokeLinecap="round"
                    strokeWidth="1.4"
                    transform="matrix(-0.721988 -0.691905 0.721988 -0.691905 14 13.4166)"
                    x1="0.7"
                    x2="4.58843"
                    y1="-0.7"
                    y2="-0.7"
                  />
                </svg>
              </button>
            </form>
          </div>
          <ul className="hrm-header-right-actions d-flex" ref={dropdownRef}>
            <li className="nav-item dropdown">
              <button
                className={`btn dropdown-toggle ${
                  activeDropdown === "chat" ? "show" : ""
                }`}
                type="button"
                onClick={() => toggleDropdown("chat")}
              >
                <svg
                  fill="none"
                  height="22"
                  viewBox="0 0 22 22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.79159 17.4166H7.33325C3.66659 17.4166 1.83325 16.5 1.83325 11.9166V7.33331C1.83325 3.66665 3.66659 1.83331 7.33325 1.83331H14.6666C18.3333 1.83331 20.1666 3.66665 20.1666 7.33331V11.9166C20.1666 15.5833 18.3333 17.4166 14.6666 17.4166H14.2083C13.9241 17.4166 13.6491 17.5541 13.4749 17.7833L12.0999 19.6166C11.4949 20.4233 10.5049 20.4233 9.89992 19.6166L8.52492 17.7833C8.37825 17.5816 8.03909 17.4166 7.79159 17.4166Z"
                    stroke="#737B8B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.41675 7.33331H15.5834"
                    stroke="#737B8B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.41675 11.9167H11.9167"
                    stroke="#737B8B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              <div
                className={`dropdown-menu notifications-box dropdown-menu-end ${
                  activeDropdown === "chat" ? "show" : ""
                }`}
              >
                <a className="dropdown-item" href="#">
                  <i className="ti ti-percentage"></i>
                  <span>Your commissions has been sent</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti ti-alert-triangle bg-warning"></i>
                  <span>Security alert for your linked Google account</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti ti-percentage"></i>
                  <span>Your commissions has been sent</span>
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <button
                className={`btn dropdown-toggle ${
                  activeDropdown === "notification" ? "show" : ""
                }`}
                type="button"
                onClick={() => toggleDropdown("notification")}
              >
                <svg
                  fill="none"
                  height="22"
                  viewBox="0 0 22 22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5.90332V8.95582"
                    stroke="#737B8B"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.0182 1.83331C7.64491 1.83331 4.91324 4.56498 4.91324 7.93831V9.86331C4.91324 10.4866 4.65657 11.4216 4.33574 11.9533L3.17157 13.8966C2.45657 15.0975 2.95157 16.4358 4.27157 16.8758C8.65324 18.3333 13.3924 18.3333 17.7741 16.8758C19.0116 16.4633 19.5432 15.015 18.8741 13.8966L17.7099 11.9533C17.3891 11.4216 17.1324 10.4775 17.1324 9.86331V7.93831C17.1232 4.58331 14.3732 1.83331 11.0182 1.83331Z"
                    stroke="#737B8B"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14.0525 17.2516C14.0525 18.9291 12.6775 20.3041 11 20.3041C10.1658 20.3041 9.39584 19.9558 8.84584 19.4058C8.29584 18.8558 7.94751 18.0858 7.94751 17.2516"
                    stroke="#737B8B"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              <div
                className={`dropdown-menu notifications-box dropdown-menu-end ${
                  activeDropdown === "notification" ? "show" : ""
                }`}
              >
                <div className="notifications-box" id="notificationsBox">
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
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <button
                className={`btn dropdown-toggle ${
                  activeDropdown === "profile" ? "show" : ""
                }`}
                type="button"
                onClick={() => toggleDropdown("profile")}
              >
                <img alt="image" src="/img/icons/profile.svg" />
              </button>

              <div
                className={`dropdown-menu notifications-box dropdown-menu-end ${
                  activeDropdown === "profile" ? "show" : ""
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
        </ul>
      </div>
    </header>
  );
};
export default HeaderSection4;
