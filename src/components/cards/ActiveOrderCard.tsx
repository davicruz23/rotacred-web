import ActiveOrderChart from "../charts/ActiveOrderChart";
import DayDropdown from "../utils/dropdowns/DayDropdown";

const ActiveOrderCard = () => {
  return (
    <div className="card pos-system-cta-card bg-white full-height">
      <div className="cta-heading-wrap d-flex justify-content-between">
        <div className="cta-heading">
          <h6>Active Order</h6>
          <h3 className="text-success">350</h3>
        </div>
        <div className="floating-dropdown">
          <DayDropdown fontSize={12} height={30} />
        </div>
      </div>

      <div className="cta-chart-wrap d-flex align-items-end justify-content-between">
        <div className="d-flex align-items-center increase-decrease-value text-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
          >
            <path
              d="M14 1L7.93333 7.06667L5.62222 3.6L1 8.22222"
              stroke="#1A83FE"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1111 1H14V3.88889"
              stroke="#1A83FE"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>5.2%</span>
        </div>

        <ActiveOrderChart />
      </div>
    </div>
  );
};
export default ActiveOrderCard;
