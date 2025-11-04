import CrmBalanceCard from "../cards/CrmBalanceCard";
import CrmCustomerCard from "../cards/CrmCustomerCard";
import CrmOrderCard from "../cards/CrmOrderCard";
import CrmTotalCard from "../cards/CrmTotalCard";
import MonthlyCard from "../cards/MonthlyCard";
import OverviewCard from "../cards/OverviewCard";
import SalesTable from "../table/SalesTable";

const CrmMain = () => {
  return (
    <div className="row g-4">
      <div className="col-12 col-md-6 col-xl-3">
        <CrmTotalCard />
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <CrmOrderCard />
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <CrmCustomerCard />
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <CrmBalanceCard />
      </div>

      <div className="col-xl-7">
        <OverviewCard />
      </div>

      <div className="col-xl-5">
        <MonthlyCard />
      </div>

      <div className="col-12">
        <SalesTable />
      </div>
    </div>
  );
};
export default CrmMain;
