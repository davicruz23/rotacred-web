import { useAppSelector } from "../../redux/hooks";
import CustomerBookingCard from "../cards/CustomerBookingCard";
import SalesByLocationCard from "../cards/SalesByLocationCard";
import TimelineCard from "../cards/TimelineCard";
import TotalBookingCard from "../cards/TotalBookingCard";
import TotalFlightCard from "../cards/TotalFlightCard";
import TotalIncomeCard from "../cards/TotalIncomeCard";
import TotalOutcomeCard from "../cards/TotalOutcomeCard";
import TransactionCard from "../cards/TransactionCard";

const OtaMain = () => {
  const activeLayout = useAppSelector((state) => state.layout.isLayout);

  return (
    <div className="row g-4">
      <div
        className={`col-12 col-md-6 col-xxl-3 ${
          activeLayout === "style-5" ? "col-xl-3" : ""
        }`}
      >
        <TotalBookingCard />
      </div>

      <div
        className={`col-12 col-md-6 col-xxl-3 ${
          activeLayout === "style-5" ? "col-xl-3" : ""
        }`}
      >
        <TotalFlightCard />
      </div>

      <div
        className={`col-12 col-md-6 col-xxl-3 ${
          activeLayout === "style-5" ? "col-xl-3" : ""
        }`}
      >
        <TotalIncomeCard />
      </div>

      <div
        className={`col-12 col-md-6 col-xxl-3 ${
          activeLayout === "style-5" ? "col-xl-3" : ""
        }`}
      >
        <TotalOutcomeCard />
      </div>

      <div className="col-12 col-xxl-7 col-lg-6">
        <CustomerBookingCard />
      </div>

      <div className="col-12 col-xxl-5 col-lg-6">
        <TimelineCard />
      </div>

      <div
        className={`col-12 col-xxl-7 ${
          activeLayout === "style-5" ? "col-xl-7" : "col-xl-6"
        }`}
      >
        <TransactionCard />
      </div>

      <div
        className={`col-12 col-xxl-5 ${
          activeLayout === "style-5" ? "col-xl-5" : "col-xl-6"
        }`}
      >
        <SalesByLocationCard />
      </div>
    </div>
  );
};
export default OtaMain;
