import { useAppSelector } from "../../redux/hooks";
import CalenderCard from "../cards/CalenderCard";
import ChatOrderCard from "../cards/ChatOrderCard";
import MapLocationCard from "../cards/MapLocationCard";
import PopularFoodCard from "../cards/PopularFoodCard";
import RecentOrderCard from "../cards/RecentOrderCard";
import RevenueCard from "../cards/RevenueCard";
import TotalCancelledCard from "../cards/TotalCancelledCard";
import TotalDeliveredCard2 from "../cards/TotalDeliveredCard2";
import TotalOrderCard5 from "../cards/TotalOrderCard5";
import TotalOrderCard6 from "../cards/TotalOrderCard6";
const RestaurantPosMain = () => {
  const activeLayout = useAppSelector((state) => state.layout.isLayout);
  return (
    <div className="row g-3">
      <div
        className={`col-12 ${
          activeLayout === "style-1" ||
          activeLayout === "style-3" ||
          activeLayout === "style-4"
            ? "col-xxl-4 col-xl-5"
            : "col-xl-4"
        }`}
      >
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-xl-6">
            <TotalOrderCard5 />
          </div>

          <div className="col-12 col-sm-6 col-xl-6">
            <TotalDeliveredCard2 />
          </div>

          <div className="col-12 col-sm-6 col-xl-6">
            <TotalCancelledCard />
          </div>

          <div className="col-12 col-sm-6 col-xl-6">
            <TotalOrderCard6 />
          </div>

          <div className="col-12 col-lg-6 col-xl-12">
            <PopularFoodCard />
          </div>

          <div className="col-12 col-lg-6 col-xl-12">
            <CalenderCard />
          </div>
        </div>
      </div>

      <div
        className={`col-12 ${
          activeLayout === "style-1" ||
          activeLayout === "style-3" ||
          activeLayout === "style-4"
            ? "col-xxl-8 col-xl-7"
            : "col-xl-8"
        }`}
      >
        <div className="row g-3">
          <div className="col-12">
            <RevenueCard />
          </div>

          <div className="col-12">
            <ChatOrderCard />
          </div>
        </div>
      </div>

      <div className="col-12 col-xl-6">
        <MapLocationCard />
      </div>

      <div className="col-12 col-xl-6">
        <RecentOrderCard />
      </div>
    </div>
  );
};
export default RestaurantPosMain;
