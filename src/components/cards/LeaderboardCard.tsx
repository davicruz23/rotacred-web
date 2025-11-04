const LeaderboardCard = () => {
  return (
    <div className="card-six leaderboard-card bg-white full-height">
      <h5 className="leaderboard-title mb-4">Leaderboard</h5>

      <div className="single-leaderboard d-flex align-items-end">
        <div className="leaderboard-thumbnail">
          <img src="./img/bg-img/t-1.jpg" alt="" />
        </div>
        <div>
          <h5 className="mb-1">Sue Shei</h5>
          <p className="mb-0">Customer</p>
        </div>
        <div className="call-time ms-auto">2h 32m</div>
      </div>

      <div className="single-leaderboard d-flex align-items-end">
        <div className="leaderboard-thumbnail">
          <img src="./img/bg-img/t-2.jpg" alt="" />
        </div>
        <div>
          <h5 className="mb-1">Richard Tea</h5>
          <p className="mb-0">Customer</p>
        </div>
        <div className="call-time ms-auto">4h 29m</div>
      </div>
      <div className="single-leaderboard d-flex align-items-end">
        <div className="leaderboard-thumbnail">
          <img src="./img/bg-img/t-3.jpg" alt="" />
        </div>
        <div>
          <h5 className="mb-1">Weir Doe</h5>
          <p className="mb-0">Customer</p>
        </div>
        <div className="call-time ms-auto">3h 17m</div>
      </div>

      <div className="single-leaderboard d-flex align-items-end">
        <div className="leaderboard-thumbnail">
          <img src="./img/bg-img/t-4.jpg" alt="" />
        </div>
        <div>
          <h5 className="mb-1">Hanson Deck</h5>
          <p className="mb-0">Customer</p>
        </div>
        <div className="call-time ms-auto">5h 47m</div>
      </div>
    </div>
  );
};
export default LeaderboardCard;
