import CustomerChart from "../charts/CustomerChart";
import MonthDropdown from "../utils/dropdowns/MonthDropdown";

const CustomerCard = () => {
  return (
    <div className="card pb-2 full-height">
      <div className="new-old-customer-wrap d-flex align-items-center justify-content-between mb-4 flex-wrap row-gap-3">
        <h5 className="mb-0">New customers vs Old customers</h5>
        <div className="d-flex align-items-center">
          <MonthDropdown />
        </div>
      </div>

      <CustomerChart />
    </div>
  );
};
export default CustomerCard;
