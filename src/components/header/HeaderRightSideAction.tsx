import { useEffect, useRef, useState } from "react";

const HeaderRightSideAction = () => {
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      className="right-side-navbar d-flex align-items-center justify-content-end"
      ref={dropdownRef}
    >
      <ul className="ps-0 right-side-content d-flex align-items-center">
        <li className="nav-item dropdown">
          <button
            className={`btn dropdown-toggle rounded ${
              activeDropdown === "notification" ? "show" : ""
            }`}
            onClick={() => toggleDropdown("notification")}
          >
            <img alt="img" src="/img/icons/notification.svg" />
            <span className="notification-active-status"></span>
          </button>

          <div
            className={`dropdown-menu notifications-box dropdown-menu-end ${
              activeDropdown === "notification" ? "show" : ""
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
            <a className="dropdown-item" href="#">
              <i className="ti ti-alert-triangle bg-warning"></i>
              <span>Security alert for your linked Google account</span>
            </a>
            <a
              href="#"
              className="btn btn-sm w-100 no-box-shadow m-0 header-bottom-btn"
            >
              View all <i className="ti ti-arrow-right"></i>
            </a>
          </div>
        </li>

        <li className="nav-item dropdown">
          <button
            className={`btn dropdown-toggle rounded ${
              activeDropdown === "msg" ? "show" : ""
            }`}
            onClick={() => toggleDropdown("msg")}
          >
            <img alt="img" src="/img/icons/message-notif.svg" />
          </button>

          <div
            className={`dropdown-menu dropdown-menu-end ${
              activeDropdown === "msg" ? "show" : ""
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
              <a className="dropdown-item" href="#">
                <i className="ti ti-alert-triangle bg-danger"></i>
                <span>Domain names expiring on Tuesday</span>
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown">
          <button className="btn rounded" type="button">
            <img alt="img" src="/img/icons/element.svg" />
          </button>
        </li>

        <li className="nav-item dropdown">
          <button
            className={`btn dropdown-toggle rounded ${
              activeDropdown === "account" ? "show" : ""
            }`}
            onClick={() => toggleDropdown("account")}
          >
            <img alt="img" src="/img/icons/profile-2.svg" />
          </button>
          <div
            className={`dropdown-menu dropdown-menu-end ${
              activeDropdown === "account" ? "show" : ""
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
  );
};
export default HeaderRightSideAction;
