import { useState } from "react";
import LogisticTabpane from "../logistic/LogisticTabpane";

const LogisticMain = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const toggleTab = (tab: string) => setActiveTab(tab);
  return (
    <div className="row g-4 logistic-main-content">
      <div className="logistics-tab">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "dashboard" ? "active" : ""
              }`}
              onClick={() => toggleTab("dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "requests" ? "active" : ""}`}
              onClick={() => toggleTab("requests")}
            >
              Requests
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "shipments" ? "active" : ""
              }`}
              onClick={() => toggleTab("shipments")}
            >
              Shipments
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "clients" ? "active" : ""}`}
              onClick={() => toggleTab("clients")}
            >
              Clients
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "documents" ? "active" : ""
              }`}
              onClick={() => toggleTab("documents")}
            >
              Documents
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className={`ar-tab-pane ${
              activeTab === "dashboard" ? "active" : ""
            }`}
          >
            <LogisticTabpane />
          </div>

          <div
            className={`ar-tab-pane ${
              activeTab === "requests" ? "active" : ""
            }`}
          >
            <LogisticTabpane />
          </div>

          <div
            className={`ar-tab-pane ${
              activeTab === "shipments" ? "active" : ""
            }`}
          >
            <LogisticTabpane />
          </div>

          <div
            className={`ar-tab-pane ${activeTab === "clients" ? "active" : ""}`}
          >
            <LogisticTabpane />
          </div>

          <div
            className={`ar-tab-pane ${
              activeTab === "documents" ? "active" : ""
            }`}
          >
            <LogisticTabpane />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogisticMain;
