import { useEffect, useRef, useState } from "react";
import { callTableData } from "../../data";

const ContactTable = () => {
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
    <div className="card-six bg-white full-height">
      <div className="card-header-area flex-wrap">
        <h3 className="card-title mb-3">Exposed Contacts</h3>

        <div className="d-flex align-items-center mb-3">
          <div
            className="call-center-table-search-bar dropdown"
            ref={dropdownRef}
          >
            <button
              className={`btn h-auto lh-auto dropdown-toggle ${
                activeDropdown === "search" ? "show" : ""
              }`}
              type="button"
              onClick={() => toggleDropdown("search")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <circle
                  cx="6.36364"
                  cy="6.36364"
                  r="5.66364"
                  stroke="#1B2559"
                  strokeWidth="1.4"
                />
                <line
                  x1="13.0101"
                  y1="14"
                  x2="10.1818"
                  y2="11.1718"
                  stroke="#1B2559"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div
              className={`dropdown-menu p-0 notifications-box dropdown-menu-end ${
                activeDropdown === "search" ? "show" : ""
              }`}
            >
              <div className="top-search-bar">
                <form action="#" method="get">
                  <input
                    className="from-control top-search rounded-0 mb-0"
                    name="search"
                    placeholder="Pesquisar"
                    type="search"
                  />
                  <button className="d-none" type="submit"></button>
                </form>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <p className="mb-1 me-2 chart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <path
                  d="M12.3703 6.74998H6.80872L10.5126 10.4539C10.6542 10.5954 10.8871 10.6069 11.0327 10.4698C11.9397 9.61525 12.5636 8.46328 12.7467 7.16835C12.7781 6.94663 12.5941 6.74998 12.3703 6.74998ZM11.9992 5.23122C11.8061 2.43134 9.56875 0.193975 6.76888 0.000847512C6.55512 -0.0139183 6.37512 0.166318 6.37512 0.380539V5.62497H11.6198C11.834 5.62497 12.014 5.44497 11.9992 5.23122ZM5.25011 6.74998V1.18844C5.25011 0.964608 5.05347 0.780622 4.83198 0.812028C2.0389 1.20672 -0.0960436 3.64682 0.00333251 6.57115C0.105521 9.57447 2.69141 12.0373 5.69613 11.9996C6.87739 11.9848 7.96889 11.6042 8.86632 10.9676C9.05148 10.8364 9.06367 10.5638 8.90312 10.4032L5.25011 6.74998Z"
                  fill="black"
                />
              </svg>
            </p>
            <select className="webdesh-select right contact-select">
              <option value="1">Sort by</option>
              <option value="2">Monthly</option>
              <option value="3">Quarterly</option>
              <option value="4">Weekly</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-responsive contact-table">
        <table className="table" id="contactTable">
          <thead>
            <tr>
              <th>ID #</th>
              <th>ADVICE</th>
              <th>FIRST NAME</th>
              <th>SURNAME</th>
              <th>NOTIFIED ON</th>
              <th>PHONE</th>
              <th>PHU</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {callTableData.map((item, index) => (
              <tr key={index}>
                <td>JK{item.id}</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle
                      cx="16"
                      cy="16.5"
                      r="6"
                      fill={
                        (item.advice === "warning" && "#FF7E07") ||
                        (item.advice === "ok" && "#22C55E") ||
                        (item.advice === "danger" && "#F33B12") ||
                        "000000"
                      }
                    />
                  </svg>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={item.img} alt="" />
                    <span>{item.first_name}</span>
                  </div>
                </td>
                <td>{item.surname}</td>
                <td>{item.notified_on}</td>
                <td>{item.phone}</td>
                <td>{item.phu}</td>
                <td>
                  <span
                    className={
                      item.status === "called"
                        ? "success-badge"
                        : "danger-badge"
                    }
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ContactTable;
