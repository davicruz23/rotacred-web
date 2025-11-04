const CallAnalyticsCard = () => {
  return (
    <div className="card-six call-analytics-card bg-white full-height">
      <div className="card-header-area mb-4">
        <h3 className="card-title mb-0">Call analytics</h3>
      </div>

      <div className="single-analytics">
        <div className="analytics-icon">
          <i className="ti ti-phone-call"></i>
        </div>
        <div>
          <span>Inbound / day</span>
          <h6 className="mb-0">5h 34m 8s</h6>
        </div>
      </div>

      <div className="single-analytics">
        <div className="analytics-icon">
          <i className="ti ti-phone-call"></i>
        </div>
        <div>
          <span>Outbound / day</span>
          <h6 className="mb-0">2h 17 m 5s</h6>
        </div>
      </div>
    </div>
  );
};
export default CallAnalyticsCard;
