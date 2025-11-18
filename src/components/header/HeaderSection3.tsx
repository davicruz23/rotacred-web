import { useEffect, useRef, useState } from "react";
type Props = {
  toggleSidebarOpen: () => void;
};
const HeaderSection3 = ({ toggleSidebarOpen }: Props) => {
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

  return (
    <header className="top-header-area d-flex align-items-center justify-content-between">
      <div className="left-side-content-area d-flex align-items-center">
        <div
          className="mobile-menu-icon d-md-none"
          id="mobileMenuIcon"
          role="button"
          onClick={toggleSidebarOpen}
        >
          <i className="ti ti-menu-deep"></i>
        </div>

        <div className="top-bar-text me-3 d-none d-xl-block">
          <h4 className="mb-1">Dashboard</h4>
          <p className="mb-0">HR Management System</p>
        </div>
      </div>

      <div className="right-side-navbar d-flex align-items-center justify-content-end">
        <ul
          className="ps-0 right-side-content d-flex align-items-center"
          ref={dropdownRef}
        >
          <div className="top-search-bar">
            <form action="#" method="get" className="">
              <input
                type="search"
                name="search"
                className="from-control top-search mb-0"
                placeholder="Pesquisar"
                onFocus={() => toggleDropdown("")}
              />
              <button type="submit" className="">
                <img src="/img/icons/search.svg" alt="" />
              </button>
            </form>
          </div>

          <li className="nav-item dropdown me-2">
            <button
              type="button"
              className={`btn language-dropdown dropdown-toggle ${
                activeDropdown === "language" ? "show" : ""
              }`}
              onClick={() => toggleDropdown("language")}
            >
              <span className="d-flex align-items-center justify-content-center">
                <img src="/img/icons/us.svg" alt="" />
                <span className="mx-2">ENG</span>
                <i className="ti ti-chevron-down"></i>
              </span>
            </button>

            <div
              className={`dropdown-menu language-dropdown-menu dropdown-menu-end ${
                activeDropdown === "language" ? "show" : ""
              }`}
            >
              <a href="#" className="dropdown-item">
                English
              </a>
              <a href="#" className="dropdown-item">
                Arabic
              </a>
              <a href="#" className="dropdown-item">
                Hindi
              </a>
              <a href="#" className="dropdown-item">
                Spanish
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <button type="button" className="btn dropdown-toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M13.8125 8.12503V12.54L17.4809 14.7408C17.6657 14.8518 17.7988 15.0316 17.851 15.2408C17.9032 15.4499 17.8702 15.6712 17.7592 15.856C17.6482 16.0407 17.4684 16.1739 17.2593 16.2261C17.0501 16.2783 16.8288 16.2452 16.6441 16.1342L12.5816 13.6967C12.4613 13.6245 12.3618 13.5224 12.2928 13.4003C12.2237 13.2782 12.1875 13.1403 12.1875 13V8.12503C12.1875 7.90954 12.2731 7.70288 12.4255 7.55051C12.5778 7.39813 12.7845 7.31253 13 7.31253C13.2155 7.31253 13.4222 7.39813 13.5745 7.55051C13.7269 7.70288 13.8125 7.90954 13.8125 8.12503ZM13 3.25003C11.7183 3.24684 10.4486 3.49788 9.26459 3.98862C8.08053 4.47936 7.00555 5.20006 6.10188 6.10901C5.36352 6.85651 4.70742 7.57558 4.0625 8.32816V6.50003C4.0625 6.28454 3.9769 6.07788 3.82452 5.92551C3.67215 5.77313 3.46549 5.68753 3.25 5.68753C3.03451 5.68753 2.82785 5.77313 2.67548 5.92551C2.5231 6.07788 2.4375 6.28454 2.4375 6.50003V10.5625C2.4375 10.778 2.5231 10.9847 2.67548 11.1371C2.82785 11.2894 3.03451 11.375 3.25 11.375H7.3125C7.52799 11.375 7.73465 11.2894 7.88702 11.1371C8.0394 10.9847 8.125 10.778 8.125 10.5625C8.125 10.347 8.0394 10.1404 7.88702 9.98801C7.73465 9.83563 7.52799 9.75003 7.3125 9.75003H4.97656C5.70273 8.89487 6.42586 8.08948 7.25055 7.25464C8.37977 6.12542 9.81673 5.35401 11.3819 5.0368C12.947 4.71959 14.5709 4.87064 16.0507 5.47109C17.5305 6.07153 18.8005 7.09474 19.7021 8.41287C20.6037 9.73099 21.0968 11.2856 21.1199 12.8824C21.143 14.4792 20.6951 16.0474 19.832 17.391C18.9689 18.7347 17.729 19.7942 16.2672 20.4372C14.8054 21.0802 13.1866 21.2782 11.6129 21.0063C10.0392 20.7345 8.58056 20.005 7.41914 18.9089C7.34152 18.8356 7.25021 18.7782 7.15042 18.7402C7.05063 18.7021 6.94432 18.6841 6.83757 18.6871C6.73081 18.6901 6.62569 18.7141 6.52821 18.7578C6.43073 18.8014 6.34281 18.8638 6.26945 18.9414C6.1961 19.0191 6.13875 19.1104 6.10068 19.2102C6.06262 19.3099 6.04458 19.4163 6.0476 19.523C6.05061 19.6298 6.07463 19.7349 6.11827 19.8324C6.16191 19.9298 6.22433 20.0178 6.30195 20.0911C7.45921 21.1832 8.86615 21.9754 10.4 22.3987C11.9339 22.822 13.548 22.8634 15.1015 22.5194C16.6551 22.1754 18.1008 21.4564 19.3126 20.4252C20.5244 19.394 21.4654 18.0818 22.0534 16.6033C22.6414 15.1247 22.8587 13.5248 22.6862 11.943C22.5137 10.3611 21.9566 8.84561 21.0637 7.52859C20.1708 6.21157 18.9691 5.1331 17.5635 4.38731C16.1579 3.64152 14.5912 3.25107 13 3.25003Z"
                  fill="#737B8B"
                />
              </svg>
            </button>
          </li>

          <li className="nav-item dropdown">
            <button
              type="button"
              className={`btn dropdown-toggle ${
                activeDropdown === "notification" ? "show" : ""
              }`}
              onClick={() => toggleDropdown("notification")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M22.5266 17.8689C21.9629 16.898 21.125 14.1507 21.125 10.5625C21.125 8.40762 20.269 6.34099 18.7453 4.81726C17.2216 3.29352 15.1549 2.4375 13 2.4375C10.8452 2.4375 8.77853 3.29352 7.2548 4.81726C5.73107 6.34099 4.87504 8.40762 4.87504 10.5625C4.87504 14.1517 4.03614 16.898 3.47247 17.8689C3.32852 18.1157 3.25221 18.3962 3.25123 18.6819C3.25025 18.9677 3.32463 19.2486 3.46688 19.4964C3.60912 19.7443 3.8142 19.9502 4.06143 20.0935C4.30866 20.2367 4.5893 20.3123 4.87504 20.3125H9.01981C9.20727 21.2298 9.70579 22.0541 10.4311 22.6462C11.1563 23.2382 12.0638 23.5616 13 23.5616C13.9363 23.5616 14.8438 23.2382 15.569 22.6462C16.2943 22.0541 16.7928 21.2298 16.9803 20.3125H21.125C21.4107 20.3121 21.6912 20.2364 21.9383 20.0931C22.1854 19.9497 22.3903 19.7438 22.5324 19.496C22.6746 19.2482 22.7489 18.9673 22.7478 18.6817C22.7468 18.396 22.6705 18.1157 22.5266 17.8689ZM13 21.9375C12.4961 21.9373 12.0046 21.781 11.5932 21.49C11.1818 21.199 10.8707 20.7876 10.7027 20.3125H15.2974C15.1294 20.7876 14.8183 21.199 14.4069 21.49C13.9955 21.781 13.504 21.9373 13 21.9375ZM4.87504 18.6875C5.65707 17.3428 6.50004 14.2269 6.50004 10.5625C6.50004 8.83859 7.18486 7.18529 8.40385 5.96631C9.62284 4.74732 11.2761 4.0625 13 4.0625C14.724 4.0625 16.3773 4.74732 17.5962 5.96631C18.8152 7.18529 19.5 8.83859 19.5 10.5625C19.5 14.2238 20.341 17.3398 21.125 18.6875H4.87504Z"
                  fill="#737B8B"
                />
              </svg>
            </button>

            <div
              className={`dropdown-menu notifications-box dropdown-menu-end ${
                activeDropdown === "notification" ? "show" : ""
              }`}
            >
              <a href="#" className="dropdown-item">
                <i className="ti ti-percentage"></i>
                <span>Your commissions has been sent</span>
              </a>
              <a href="#" className="dropdown-item">
                <i className="ti ti-alert-triangle bg-warning"></i>
                <span>Security alert for your linked Google account</span>
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <button type="button" className="btn dropdown-toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M21.9375 4.0625H4.0625C3.63152 4.0625 3.2182 4.2337 2.91345 4.53845C2.6087 4.8432 2.4375 5.25652 2.4375 5.6875V20.3125C2.4375 20.7435 2.6087 21.1568 2.91345 21.4615C3.2182 21.7663 3.63152 21.9375 4.0625 21.9375H21.9375C22.3685 21.9375 22.7818 21.7663 23.0865 21.4615C23.3913 21.1568 23.5625 20.7435 23.5625 20.3125V5.6875C23.5625 5.25652 23.3913 4.8432 23.0865 4.53845C22.7818 4.2337 22.3685 4.0625 21.9375 4.0625ZM4.0625 15.4375H5.6875C5.90299 15.4375 6.10965 15.3519 6.26202 15.1995C6.4144 15.0472 6.5 14.8405 6.5 14.625C6.5 14.4095 6.4144 14.2028 6.26202 14.0505C6.10965 13.8981 5.90299 13.8125 5.6875 13.8125H4.0625V12.1875H5.6875C5.90299 12.1875 6.10965 12.1019 6.26202 11.9495C6.4144 11.7972 6.5 11.5905 6.5 11.375C6.5 11.1595 6.4144 10.9528 6.26202 10.8005C6.10965 10.6481 5.90299 10.5625 5.6875 10.5625H4.0625V8.9375H5.6875C5.90299 8.9375 6.10965 8.8519 6.26202 8.69952C6.4144 8.54715 6.5 8.34049 6.5 8.125C6.5 7.90951 6.4144 7.70285 6.26202 7.55048C6.10965 7.3981 5.90299 7.3125 5.6875 7.3125H4.0625V5.6875H8.125V20.3125H4.0625V15.4375ZM21.9375 20.3125H9.75V5.6875H21.9375V20.3125Z"
                  fill="#737B8B"
                />
              </svg>
            </button>
          </li>

          <li className="nav-item dropdown ms-2">
            <button
              type="button"
              className={`btn topbar-user-meta-data dropdown-toggle ${
                activeDropdown === "profile" ? "show" : ""
              }`}
              onClick={() => toggleDropdown("profile")}
            >
              <span className="d-flex align-items-center">
                <span className="topbar-user-img">
                  <img src="/img/bg-img/user.png" alt="" />
                </span>
                <span className="topbar-user-info d-none d-lg-block me-2">
                  <h6>Parsley Montana</h6>
                  <span>Project manager</span>
                </span>
                <i className="ti ti-chevron-down"></i>
              </span>
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
      </div>
    </header>
  );
};
export default HeaderSection3;
