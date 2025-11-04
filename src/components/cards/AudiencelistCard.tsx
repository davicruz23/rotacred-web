import { locationAudienceList } from "../../data";
import { useEffect, useRef, useState } from "react";

const AudiencelistCard = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (activeDropdown !== null && dropdownRefs?.current[activeDropdown]) {
        if (
          !dropdownRefs?.current[activeDropdown]?.contains(event.target as Node)
        ) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: number) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownButtonClick = (dropdown: number) => {
    toggleDropdown(dropdown);
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  return (
    <div className="card full-height">
      <div className="d-flex flex-wrap mb-3 align-items-center justify-content-between">
        <h5 className="fw-medium mb-0">Location of Audience</h5>
        <a href="#" className="btn btn-link p-0">
          See all
        </a>
      </div>

      <ul className="ps-0 location-audience-list">
        {locationAudienceList.map((item) => (
          <li key={item.id}>
            <div className="d-flex align-items-center">
              <img src={item.img} alt="img" />
              <div>
                <h6 className="mb-1">{item.state}</h6>
                <span>
                  <span className="text-success">+{item.successRate}</span>{" "}
                  increase than before
                </span>
              </div>
            </div>

            <div
              className="dropdown"
              ref={(ref) => (dropdownRefs.current[item.id] = ref)}
            >
              <button
                className="btn"
                type="button"
                onClick={() => handleDropdownButtonClick(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                >
                  <path
                    opacity="0.7"
                    d="M16 2C16 3.10457 15.1046 4 14 4C12.8954 4 12 3.10457 12 2C12 0.89543 12.8954 -5.63677e-07 14 -6.11959e-07C15.1046 -6.60242e-07 16 0.89543 16 2ZM10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 -3.01409e-07 8 -3.49691e-07C8.53043 -3.72877e-07 9.03914 0.210713 9.41421 0.585786C9.78929 0.960859 10 1.46957 10 2ZM4 2C4 3.10457 3.10457 4 2 4C0.89543 4 -3.91405e-08 3.10457 -8.74228e-08 2C-1.35705e-07 0.895431 0.89543 -3.91405e-08 2 -8.74228e-08C2.53043 -1.10609e-07 3.03914 0.210713 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z"
                    fill="#252F4A"
                  />
                </svg>
              </button>
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  activeDropdown === item.id ? "show" : ""
                }`}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Update
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Delete
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AudiencelistCard;
