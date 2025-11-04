import CallAnalytcsCard2 from "../cards/CallAnalytcsCard2";
import CallAnalyticsCard from "../cards/CallAnalyticsCard";
import CallAnalyticsCard3 from "../cards/CallAnalyticsCard3";
import CallHistoryCard from "../cards/CallHistoryCard";
import ContactCardList from "../cards/ContactCardList";
import LeaderboardCard from "../cards/LeaderboardCard";
import PerformanceCard from "../cards/PerformanceCard";
import ContactTable from "../table/ContactTable";

const CallCenterMain = () => {
  return (
    <div className="row g-4">
      <div className="col-12 col-lg-12 col-xxl-9">
        <div className="row g-4">
          <div className="col-12 col-lg-6 col-xl-4">
            <CallAnalyticsCard />
          </div>

          <div className="col-12 col-lg-6 col-xl-4">
            <CallAnalytcsCard2 />
          </div>

          <div className="col-12 col-xl-4">
            <CallAnalyticsCard3 />
          </div>

          <div className="col-12">
            <PerformanceCard />
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-12 col-xxl-3">
        <div className="row g-4">
          <div className="col-lg-6 col-xxl-12">
            <CallHistoryCard />
          </div>

          <div className="col-lg-6 col-xxl-12">
            <LeaderboardCard />
          </div>
        </div>
      </div>

      <ContactCardList />

      <div className="col-12">
        <ContactTable />
      </div>
    </div>
  );
};
export default CallCenterMain;
