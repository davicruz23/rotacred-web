import AverageOrdersChart from "../charts/AverageOrdersChart";
import DayDropdown from "../utils/dropdowns/DayDropdown";

const AverageOrderCard = () => {
  return (
    <div className="card pos-system-cta-card bg-white full-height">
      <div className="cta-heading-wrap d-flex justify-content-between">
        <div className="cta-heading">
          <h6>Average Order</h6>
          <h3 className="text-danger">$25.20</h3>
        </div>
        <div className="floating-dropdown">
          <DayDropdown fontSize={12} height={30} />
        </div>
      </div>

      <div className="cta-chart-wrap d-flex align-items-end justify-content-between">
        <div className="d-flex align-items-center increase-decrease-value text-danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
          >
            <path
              d="M14 8.22217L7.93333 2.1555L5.62222 5.62217L1 0.999946"
              stroke="#EC3838"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1111 8.22217H14V5.33328"
              stroke="#EC3838"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>5.2%</span>
        </div>

        <AverageOrdersChart />
      </div>
    </div>
  );
};
export default AverageOrderCard;
