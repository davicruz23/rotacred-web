const SessionsCard = () => {
  return (
    <div className="card saas-cta-card">
      <div className="d-flex align-items-center">
        <div className="icon-wrap">
          <i className="ti ti-calendar-clock"></i>
        </div>
        <h6 className="mb-0 fw-medium text-white">Sessions</h6>
      </div>
      <h3 className="title my-4 text-white">87.290</h3>
      <div className="subtitle text-white">
        <i className="ti ti-arrow-up"></i>
        <span className="fw-semibold">+18%</span> on this week
      </div>
    </div>
  );
};
export default SessionsCard;
