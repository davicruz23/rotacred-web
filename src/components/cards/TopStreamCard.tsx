import { useState } from "react";
import StreamList from "../stream/StreamList";

const TopStreamCard = () => {
  const [extend, setExtend] = useState<boolean>(false);
  const toggleExtend = () => {
    setExtend(!extend);
  };
  const [activeTab, setActiveTab] = useState<string>("local");
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className={`top-streams-wrap ${extend ? "active" : ""}`}>
      <div className="d-flex flex-wrap g-4 justify-content-between align-items-center mb-4">
        <h5>Top Streams Real-time</h5>

        <ul className="nav top-streams-tab nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "local" ? "active" : ""}`}
              onClick={() => toggleTab("local")}
            >
              Local
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "global" ? "active" : ""}`}
              onClick={() => toggleTab("global")}
            >
              Global
            </button>
          </li>
        </ul>
      </div>

      <div className="tab-content">
        <div
          className={`music-tab-pane ${activeTab === "local" ? "active" : ""}`}
        >
          <StreamList />
        </div>

        <div
          className={`music-tab-pane ${activeTab === "global" ? "active" : ""}`}
        >
          <StreamList />
        </div>
      </div>

      <a
        id="expandCollaspeBtn"
        className={`expand-collaspe-btn ${extend ? "active" : ""}`}
        onClick={toggleExtend}
      >
        <span className="expand">
          Expand <i className="ti ti-chevron-down"></i>
        </span>
        <span className="collaspe">
          Collaspe <i className="ti ti-chevron-up"></i>
        </span>
      </a>
    </div>
  );
};
export default TopStreamCard;
