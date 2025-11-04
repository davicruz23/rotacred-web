const VisitorCard = () => {
  return (
    <div className="card saas-cta-card">
      <div className="d-flex align-items-center">
        <div className="icon-wrap">
          <i className="ti ti-user"></i>
        </div>
        <h6 className="mb-0 fw-medium text-white">Visitors</h6>
      </div>
      <h3 className="title my-4 text-white">350,745</h3>
      <div className="subtitle text-white">
        <i className="ti ti-arrow-down"></i>
        <span className="fw-semibold">-2%</span> on this week
      </div>
    </div>
  );
};
export default VisitorCard;
