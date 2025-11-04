import { useEffect, useRef, useState } from "react";

const RecentOrderCard = () => {
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
    <div className="card bg-white full-height">
      <div className="card-header-area recent-order-card-header-area mb-3 d-flex flex-wrap">
        <h5 className="mb-0">Recent Orders</h5>

        <div className="dropdown" ref={dropdownRef}>
          <button className="btn border-0 p-0" onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="5"
              viewBox="0 0 19 5"
              fill="none"
            >
              <g opacity="1">
                <path
                  d="M17.9831 1.01676C17.0719 0.105536 15.5945 0.105536 14.6833 1.01676C13.772 1.92798 13.772 3.40536 14.6833 4.31658C15.5945 5.22781 17.0719 5.22781 17.9831 4.31658C18.8943 3.4054 18.8943 1.92801 17.9831 1.01676Z"
                  fill="#343A40"
                />
                <path
                  d="M10.9833 1.01676C10.0721 0.105536 8.59466 0.105536 7.68344 1.01676C6.77222 1.92798 6.77222 3.40536 7.68344 4.31658C8.59466 5.22781 10.0721 5.22781 10.9833 4.31658C11.8945 3.4054 11.8945 1.92801 10.9833 1.01676Z"
                  fill="#343A40"
                />
                <path
                  d="M3.98327 1.01676C3.07205 0.105536 1.59466 0.105536 0.683439 1.01676C-0.227783 1.92798 -0.227783 3.40536 0.683439 4.31658C1.59466 5.22781 3.07205 5.22781 3.98327 4.31658C4.89449 3.4054 4.89449 1.92801 3.98327 1.01676Z"
                  fill="#343A40"
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
      <div className="recent-orders">
        <ul className="recent-order-list">
          <li>
            <div>
              <div
                className="list-img"
                style={{ backgroundImage: "url('/img/bg-img/5.jpg')" }}
              ></div>
              <h6 className="mb-0">Fresh Salad Bowl</h6>
            </div>
            <div className="list-price">IDR 45.000</div>
          </li>
          <li>
            <div>
              <div
                className="list-img"
                style={{ backgroundImage: "url('/img/bg-img/6.jpg')" }}
              ></div>
              <h6 className="mb-0">Chicken Noodles</h6>
            </div>
            <div className="list-price">IDR 75.000</div>
          </li>
          <li>
            <div>
              <div
                className="list-img"
                style={{ backgroundImage: "url('/img/bg-img/7.jpg')" }}
              ></div>
              <h6 className="mb-0">Smoothie Fruits</h6>
            </div>
            <div className="list-price">IDR 45.000</div>
          </li>
          <li>
            <div>
              <div
                className="list-img"
                style={{ backgroundImage: "url('/img/bg-img/8.jpg')" }}
              ></div>
              <h6 className="mb-0">Hot Chicken Wings</h6>
            </div>
            <div className="list-price">IDR 45.000</div>
          </li>
          <li>
            <div>
              <div
                className="list-img"
                style={{ backgroundImage: "url('/img/bg-img/9.jpg')" }}
              ></div>
              <h6 className="mb-0">Smoothie Fruits</h6>
            </div>
            <div className="list-price">IDR 45.000</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RecentOrderCard;
