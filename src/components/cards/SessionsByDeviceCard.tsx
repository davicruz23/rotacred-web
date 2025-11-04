import SessionsByDeviceChart from "../charts/SessionsByDeviceChart";

const SessionsByDeviceCard = () => {
  return (
    <div className="card ps-0 full-height">
      <h5 className="mb-4 fw-medium ps-4">Sessions By Device</h5>

      <div className="d-flex align-items-center justify-content-between">
        <SessionsByDeviceChart />
        <div className="sessions-by-device-content">
          <div className="mb-3">
            <p className="mb-2">Desktop</p>
            <h5 className="mb-0">9,085</h5>
          </div>

          <div className="mb-3">
            <p className="mb-2">Mobile</p>
            <h5 className="mb-0">12,085</h5>
          </div>

          <div>
            <p className="mb-2">Tablets</p>
            <h5 className="mb-0">
              8,85 <span>25%</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SessionsByDeviceCard;
