import EmployeeStatusCard from "../cards/EmployeeStatusCard";
import JobAppliedCard from "../cards/JobAppliedCard";
import JobStatisticCard from "../cards/JobStatisticCard";
import JobViewCard from "../cards/JobViewCard";
import LocationHireCard from "../cards/LocationHireCard";
import ResignedEmployeeCard from "../cards/ResignedEmployeeCard";
import TotalEmployeeCard2 from "../cards/TotalEmployeeCard2";

const HrmMain = () => {
  return (
    <div className="row g-4">
      <div className="col-12 col-xl-3">
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-12">
            <TotalEmployeeCard2 />
          </div>

          <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-12">
            <JobViewCard />
          </div>

          <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-12">
            <JobAppliedCard />
          </div>

          <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-12">
            <ResignedEmployeeCard />
          </div>
        </div>
      </div>

      <div className="col-12 col-xl-9">
        <JobStatisticCard />
      </div>

      <div className="col-12 col-xxl-7">
        <LocationHireCard />
      </div>

      <div className="col-12 col-xxl-5">
        <EmployeeStatusCard />
      </div>
    </div>
  );
};
export default HrmMain;
