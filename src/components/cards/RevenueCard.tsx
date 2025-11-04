import RevenueChart from "../charts/RevenueChart";

const RevenueCard = () => {
  return (
    <div className="card bg-white">
      <div className="revenue-chart-wrapper">
        <div className="chart-header d-flex justify-content-between mb-3 flex-wrap">
          <div className="revenue-chart-content">
            <p>Revenue</p>
            <h4 className="mb-3">IDR 7.852.000</h4>
            <span className="mb-4">
              <span className="text-success">
                <i className="ti ti-arrow-narrow-up"></i> 2.1%
              </span>{" "}
              vs last week
            </span>
            <span>Sales from 1-12 Dec, 2020</span>
          </div>
          <a href="#" className="btn btn-view-report">
            View Report
          </a>
        </div>

        <RevenueChart />
      </div>
    </div>
  );
};
export default RevenueCard;
