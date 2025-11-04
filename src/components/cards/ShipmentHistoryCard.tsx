import { useState } from "react";
import ShipmentHistoryTabpane from "../shipment/ShipmentHistoryTabpane";

const ShipmentHistoryCard = () => {
  const [activeTab, setActiveTab] = useState<string>("notable");
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="card">
      <div className="mb-4 gap-2 card-header-content d-flex align-items-center justify-content-between flex-wrap">
        <div className="me-4">
          <h6 className="mb-1">Shipment History</h6>
          <p className="mb-0">59 Active Shipments</p>
        </div>
        <button className="btn btn-lean">View All</button>
      </div>

      <div className="shipping-history-tab">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "notable" ? "active" : ""}`}
              onClick={() => toggleTab("notable")}
            >
              Notable
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "delivered" ? "active" : ""
              }`}
              onClick={() => toggleTab("delivered")}
            >
              Delivered
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "shipping" ? "active" : ""}`}
              onClick={() => toggleTab("shipping")}
            >
              Shipping
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className={`ar-tab-pane ${activeTab === "notable" ? "active" : ""}`}
          >
            <ShipmentHistoryTabpane />
          </div>

          <div
            className={`ar-tab-pane ${
              activeTab === "delivered" ? "active" : ""
            }`}
          >
            <ShipmentHistoryTabpane />
          </div>

          <div
            className={`ar-tab-pane ${
              activeTab === "shipping" ? "active" : ""
            }`}
          >
            <ShipmentHistoryTabpane />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShipmentHistoryCard;
