const GoalsCard = () => {
  return (
    <div className="card saas-small-card">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h4>210</h4>
          <p className="mb-0">Today</p>
        </div>

        <div className="progress-circle">
          <span className="progress-text">Goals</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <circle cx="29" cy="29" r="26" stroke="#F5EFFF" strokeWidth="6" />
            <path
              d="M55 29C55 43.3594 43.3594 55 29 55C14.6406 55 3 43.3594 3 29C3 14.6406 14.6406 3 29 3"
              stroke="#109CF1"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="text-end">
          <h4>150</h4>
          <p className="mb-0">Expected</p>
        </div>
      </div>
    </div>
  );
};
export default GoalsCard;
