import { useState } from "react";
import OverviewTabpane from "../overview/OverviewTabpane";

const OverviewPerformanceCard = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="card overview-card full-height">
      <button className="btn btn-lean">9 Dec 2022 - 7 Jan 2023</button>

      <div className="overview-performance-tab">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ps-0 ${
                activeTab === "overview" ? "active" : ""
              }`}
              onClick={() => toggleTab("overview")}
            >
              Overview
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "performance" ? "active" : ""
              }`}
              onClick={() => toggleTab("performance")}
            >
              Performance
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className={`ar-tab-pane ${
              activeTab === "overview" ? "active" : ""
            }`}
          >
            <OverviewTabpane />
          </div>

          <div
            className={`ar-tab-pane ${
              activeTab === "performance" ? "active" : ""
            }`}
          >
            <OverviewTabpane />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OverviewPerformanceCard;
