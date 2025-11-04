import PopularFoodChart from "../charts/PopularFoodChart";
import { useEffect, useRef, useState } from "react";

const PopularFoodCard = () => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };
  return (
    <div className="card full-height">
      <div className="chart-header mb-4 d-flex align-items-center justify-content-between">
        <h6 className="mb-0">Popular Food</h6>

        <div className="dropdown" ref={dropdownRef}>
          <button
            className="btn border-0 p-0"
            type="button"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="4"
              viewBox="0 0 14 4"
              fill="none"
            >
              <g opacity="0.3">
                <path
                  d="M13.4874 1.01257C12.804 0.329152 11.696 0.329152 11.0126 1.01257C10.3291 1.69598 10.3291 2.80402 11.0126 3.48744C11.696 4.17085 12.804 4.17085 13.4874 3.48744C14.1709 2.80405 14.1709 1.69601 13.4874 1.01257Z"
                  fill="#030229"
                />
                <path
                  d="M8.23744 1.01257C7.55402 0.329152 6.44598 0.329152 5.76257 1.01257C5.07915 1.69598 5.07915 2.80402 5.76257 3.48744C6.44598 4.17085 7.55402 4.17085 8.23744 3.48744C8.92085 2.80405 8.92085 1.69601 8.23744 1.01257Z"
                  fill="#030229"
                />
                <path
                  d="M2.98741 1.01257C2.30399 0.329152 1.19595 0.329152 0.512533 1.01257C-0.170883 1.69598 -0.170883 2.80402 0.512533 3.48744C1.19595 4.17085 2.30399 4.17085 2.98741 3.48744C3.67082 2.80405 3.67082 1.69601 2.98741 1.01257Z"
                  fill="#030229"
                />
              </g>
            </svg>
          </button>

          <div
            className={`dropdown-menu dropdown-menu-end ${
              activeDropdown ? "show" : ""
            }`}
          >
            <a className="dropdown-item" href="#">
              Jan 2024
            </a>
            <a className="dropdown-item" href="#">
              Feb 2024
            </a>
            <a className="dropdown-item" href="#">
              Mar 2024
            </a>
          </div>
        </div>
      </div>

      <div className="popular-food-chart">
        <PopularFoodChart />
      </div>
    </div>
  );
};
export default PopularFoodCard;
