import VolumeServiceLevelChart from "../charts/VolumeServiceLevelChart";

const VolumeServiceCard = () => {
  return (
    <div className="card full-height">
      <h5 className="mb-4">Volume vs Service Level</h5>

      <VolumeServiceLevelChart />
      <div className="volume-sevice-content d-flex align-items-center justify-content-center">
        <div className="d-flex">
          <span className="dot"></span>
          <div>
            <h6>Volume</h6>
            <span className="value d-block">1,135</span>
          </div>
        </div>
        <div className="d-flex">
          <span className="dot bg-success"></span>
          <div>
            <h6>Services</h6>
            <span className="value d-block">635</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VolumeServiceCard;
