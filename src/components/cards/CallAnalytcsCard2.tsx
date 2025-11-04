import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

const CallAnalytcsCard2 = () => {
  const chartRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const options = {
      chart: {
        height: 140,
        type: "area",
        fontFamily: "Poppins, sans-serif",
        dropShadow: {
          enabled: true,
          opacity: 0.1,
          blur: 2,
          left: -1,
          top: 5,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ["#22C55E"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 0.05,
      },
      tooltip: {
        theme: "dark",
        fillSeriesColor: true,
        style: {
          fontSize: "10px",
        },
        marker: {
          show: false,
        },
        x: {
          show: false,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 3,
      },
      series: [
        {
          name: "Time",
          data: [90, 78, 75, 82, 105, 88, 69, 78, 96, 88],
        },
      ],
    };
    const chart = new ApexCharts(chartRef.current, options);

    const initChart = () => {
      chart.render();
    };

    initChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="card-six p-0 call-analytics-card bg-white full-height d-flex flex-column">
      <div className="card-header-area p-4">
        <h3 className="card-title mb-0">Call analytics</h3>
        <div className="dropdown" ref={dropdownRef}>
          <button
            className={`btn p-0 dropdown-toggle ${
              activeDropdown === "option" ? "show" : ""
            }`}
            type="button"
            onClick={() => toggleDropdown("option")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
                fill="#737B8B"
              />
              <path
                d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                fill="#737B8B"
              />
              <path
                d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
                fill="#737B8B"
              />
            </svg>
          </button>
          <ul
            className={`dropdown-menu dropdown-menu-end ${
              activeDropdown === "option" ? "show" : ""
            }`}
          >
            <li>
              <a className="dropdown-item" href="#">
                Update
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Remove
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Trash
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="total-call-time px-4">
        <h6 className="mb-1">34 h 48 min</h6>
        <p className="mb-0">16% Increase</p>
      </div>
      <div className="mt-auto" ref={chartRef}></div>
    </div>
  );
};

export default CallAnalytcsCard2;
