import AnnouncementCard from "../cards/AnnouncementCard";
import CheckInCard from "../cards/CheckInCard";
import ExpenseBreakdownCard from "../cards/ExpenseBreakdownCard";
import JobClosedCard from "../cards/JobClosedCard";
import OccupancyCard from "../cards/OccupancyCard";
import TotalEmployeeCard from "../cards/TotalEmployeeCard";
import TotalProjectCard from "../cards/TotalProjectCard";
import TotalRevenueCard from "../cards/TotalRevenueCard";
import UpcomingScheduleCard from "../cards/UpcomingScheduleCard";
import VisitorAnalyticsCard from "../cards/VisitorAnalyticsCard";

const HrManagementMain = () => {
  return (
    <div className="row g-4">
      <div className="col-12 col-sm-6 col-xl">
        <TotalRevenueCard />
      </div>

      <div className="col-12 col-sm-6 col-xl">
        <TotalProjectCard />
      </div>

      <div className="col-12 col-sm-6 col-xl">
        <JobClosedCard />
      </div>

      <div className="col-12 col-sm-6 col-xl">
        <TotalEmployeeCard />
      </div>

      <div className="col-12 col-xl-2">
        <CheckInCard />
      </div>

      <div className="col-12 col-xl-6">
        <OccupancyCard />
      </div>

      <div className="col-12 col-xl-6">
        <ExpenseBreakdownCard />
      </div>

      <div className="col-12 col-xl-6 col-xxl-5">
        <AnnouncementCard />
      </div>

      <div className="col-12 col-xl-6 col-xxl-3">
        <UpcomingScheduleCard />
      </div>

      <div className="col-12 col-xl-6 col-xxl-4">
        <VisitorAnalyticsCard />
      </div>
    </div>
  );
};
export default HrManagementMain;
