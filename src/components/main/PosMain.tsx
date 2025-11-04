import ActiveOrderCard from "../cards/ActiveOrderCard";
import AudiencelistCard from "../cards/AudiencelistCard";
import AverageOrderCard from "../cards/AverageOrderCard";
import OrderAndSalesOverviewCard from "../cards/OrderAndSalesOverviewCard";
import OrderListCard from "../cards/OrderListCard";
import SellingPlatformCard from "../cards/SellingPlatformCard";
import TotalOrderCard7 from "../cards/TotalOrderCard7";
import TotalSaleCard from "../cards/TotalSaleCard";
import VolumeServiceCard from "../cards/VolumeServiceCard";
const PosMain = () => {
  return (
    <div className="row g-4">
      <div className="col-12 col-lg-6 col-xl-6 col-xxl-3">
        <TotalOrderCard7 />
      </div>

      <div className="col-12 col-lg-6 col-xl-6 col-xxl-3">
        <TotalSaleCard />
      </div>

      <div className="col-12 col-lg-6 col-xl-6 col-xxl-3">
        <ActiveOrderCard />
      </div>

      <div className="col-12 col-lg-6 col-xl-6 col-xxl-3">
        <AverageOrderCard />
      </div>

      <div className="col-12 col-xl-8">
        <OrderAndSalesOverviewCard />
      </div>

      <div className="col-12 col-xl-4">
        <SellingPlatformCard />
      </div>

      <div className="col-12 col-xl-12 col-xxl-5">
        <OrderListCard />
      </div>

      <div className="col-12 col-xl-6 col-xxl-3">
        <VolumeServiceCard />
      </div>

      <div className="col-12 col-xl-6 col-xxl-4">
        <AudiencelistCard />
      </div>
    </div>
  );
};
export default PosMain;
