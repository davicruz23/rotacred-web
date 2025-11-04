import OrderSalesOverviewChart from "../charts/OrderSalesOverviewChart";
import DayDropdown from "../utils/dropdowns/DayDropdown";
import SalesDropdown from "../utils/dropdowns/SalesDropdown";

const OrderAndSalesOverviewCard = () => {
  return (
    <div className="card full-height">
      <div className="orders-sales-overview-wrap d-flex align-items-center justify-content-between mb-4">
        <h5 className="mb-0">Our Order & Sales Overview</h5>
        <div className="d-flex align-items-center">
          <SalesDropdown />
          <div className="mx-2"></div>
          <DayDropdown color="#1A83FE" />
        </div>
      </div>

      <OrderSalesOverviewChart />
    </div>
  );
};
export default OrderAndSalesOverviewCard;
