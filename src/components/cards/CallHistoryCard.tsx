import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

const chartOptions = {
  chart: {
    height: 260,
    type: "donut",
    fontFamily: "Poppins, sans-serif",
    animations: {
      enabled: !0,
      easing: "easeinout",
      speed: 1e3,
    },
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: false,
    },
  },
  legend: {
    show: true,
    position: "right",
    horizontalAlign: "center",
    floating: false,
    fontSize: "10px",
    fontWeight: 500,
    color: "#868E96",
    offsetX: 0,
    offsetY: 0,
    markers: {
      width: 10,
      height: 10,
      strokeWidth: 0,
      strokeColor: "#fff",
      radius: 10,
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 0,
      vertical: 0,
    },
  },
  colors: ["#339AF0", "#51CF66", "#FF922B", "#F3F3F4"],
  series: [20, 40, 15, 15],
  labels: ["SERVER (20%)", "Partner (40%)", "SERVICES (15%)", "OTHERS (15%)"],
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 300,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
      },
    },
    {
      breakpoint: 479,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
      },
    },
  ],
};
const CallHistoryCard = () => {
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
    const chart = new ApexCharts(chartRef.current, chartOptions);

    const initChart = () => {
      chart.render(); // Attempt to render with default options
    };

    initChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);
  return (
    <div className="card-six calling-history-card p-0 bg-white">
      <div className="calling-history-header p-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a className="resize-btn" href="#">
            <i className="ti ti-arrows-move"></i>
          </a>
          <div className="ms-2">
            <h6 className="mb-0">Calling History</h6>
            <p className="mb-0">Payments</p>
          </div>
        </div>

        <div className="dropdown" ref={dropdownRef}>
          <button
            className={`btn pe-0 dropdown-toggle ${
              activeDropdown === "history" ? "show" : ""
            }`}
            type="button"
            onClick={() => toggleDropdown("history")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
            >
              <path
                d="M2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z"
                fill="#343A40"
              />
            </svg>
          </button>
          <ul
            className={`dropdown-menu dropdown-menu-end ${
              activeDropdown === "history" ? "show" : ""
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
      </div>

      <div className="calling-history-chart d-flex justify-content-center px-2 py-4 py-sm-5">
        <div id="callingHistoryChart" ref={chartRef}></div>
      </div>

      <a className="see-details-btn" href="#">
        SEE DETAILS{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.38113 5.48277C8.78651 5.15211 9.38375 5.17575 9.76215 5.55369L15.6041 11.396C15.8 11.5919 15.906 11.8539 15.906 12.1256C15.906 12.3975 15.8002 12.659 15.6041 12.8556L9.76203 18.6977C9.35848 19.1008 8.70527 19.1008 8.30278 18.6977C7.89909 18.2945 7.89909 17.6411 8.30266 17.2381L13.4147 12.1256L8.30278 7.01328C7.92434 6.63529 7.90067 6.03745 8.23178 5.63202L8.30274 5.55362L8.38113 5.48277Z"
            fill="#343A40"
          />
        </svg>
      </a>
    </div>
  );
};
export default CallHistoryCard;
