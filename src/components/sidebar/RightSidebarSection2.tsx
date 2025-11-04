import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { useAppSelector } from "../../redux/hooks";

const RightSidebarSection2 = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const sidebarBgImage = useAppSelector((state) => state.sidebarBg.sidebarBg);

  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);
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
  return (
    <div
      className={`webdesh-sidemenu-area ${
        sidebarBgImage !== "" ? "sidebar-bg-detected" : ""
      }`}
      id="sideMenuWrapper"
      style={{
        ...(sidebarBgImage !== "" && {
          backgroundImage: `url(${sidebarBgImage})`,
        }),
      }}
    >
      <div className="crm-search-bar dropdown" ref={dropdownRef}>
        <button
          className={`btn p-0 dropdown-toggle ${
            activeDropdown === "search" ? "show" : ""
          }`}
          type="button"
          onClick={() => toggleDropdown("search")}
        >
          <i className="ti ti-search"></i>
        </button>

        <div
          className={`dropdown-menu notifications-box dropdown-menu-end ${
            activeDropdown === "search" ? "show" : ""
          }`}
        >
          <div className="top-search-bar">
            <form action="#" method="get">
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
        </div>
      </div>

      <div className="webdesh-sidenav">
        <div className="side-menu-area" id="webdeshSideNav">
          <nav className="crm-nav">
            <ul>
              <li
                className={`nav-item ${pathname === "/charts" ? "active" : ""}`}
              >
                <Link
                  to="/charts"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Charts"
                >
                  <i className="ti ti-chart-pie"></i>
                </Link>
              </li>

              <li
                className={`nav-item ${pathname === "/chat" ? "active" : ""}`}
              >
                <Link
                  to="/chat"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Chat"
                >
                  <i className="ti ti-chart-bar"></i>
                </Link>
              </li>

              <li
                className={`nav-item ${pathname === "/leads" ? "active" : ""}`}
              >
                <Link
                  to="/leads"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Leads"
                >
                  <i className="ti ti-box"></i>
                </Link>
              </li>

              <li
                className={`nav-item ${pathname === "/order" ? "active" : ""}`}
              >
                <Link
                  to="/order"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Order"
                >
                  <i className="ti ti-wallet"></i>
                </Link>
              </li>

              <li
                className={`nav-item ${pathname === "/email" ? "active" : ""}`}
              >
                <Link
                  to="/email"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Emails"
                >
                  <i className="ti ti-at"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="crm-settings-btn">
        <Link to="/#">
          <i className="ti ti-settings"></i>
        </Link>
      </div>
      <Tooltip id="my-tooltip" place="left" />
    </div>
  );
};
export default RightSidebarSection2;
