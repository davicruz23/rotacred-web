const UsersCard = () => {
  return (
    <div className="card saas-cta-card">
      <div className="d-flex align-items-center">
        <div className="icon-wrap">
          <i className="ti ti-users"></i>
        </div>
        <h6 className="mb-0 fw-medium text-white">Users</h6>
      </div>
      <h3 className="title my-4 text-white">72.690</h3>
      <div className="subtitle text-white">
        <i className="ti ti-arrow-up"></i>
        <span className="fw-semibold">+12%</span> on this week
      </div>
    </div>
  );
};
export default UsersCard;
