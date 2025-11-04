import WorldMap from "react-svg-worldmap";
import { countryData } from "../../data";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useRef, useState } from "react";

const MapLocationCard2 = () => {
  const darkMode = useAppSelector((state) => state.theme.isDark);
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };
  return (
    <div className="card bg-white pb-0 full-height">
      <div className="row">
        <div className="col-12">
          <div className="card-header-area map-location-card-header-area pb-2 border-bottom flex-wrap mb-4">
            <div>
              <h5 className="mb-1">Map Location</h5>
              <p className="mb-0">Report Center</p>
            </div>

            <div className="dropdown" ref={dropdownRef}>
              <button className="btn border-0 p-0" onClick={toggleDropdown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                >
                  <path
                    d="M2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z"
                    fill="#343A40"
                  />
                </svg>
              </button>
              <div
                className={`dropdown-menu dropdown-menu-end ${
                  activeDropdown ? "show" : ""
                }`}
              >
                <a className="dropdown-item" href="#">
                  Jan 2024
                </a>
                <a className="dropdown-item" href="#">
                  Feb 2024
                </a>
                <a className="dropdown-item" href="#">
                  Mar 2024
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="map-location-wrap d-flex align-items-center flex-wrap">
            <div className="country-list-area">
              <div className="chart-county-list">
                <div className="d-flex align-items-center justify-content-between">
                  <span>Europe</span>
                  <span>580 Users</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div className="chart-county-list">
                <div className="d-flex align-items-center justify-content-between">
                  <span>Asia</span>
                  <span>103 Users</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "10%" }}></div>
                </div>
              </div>

              <div className="chart-county-list">
                <div className="d-flex align-items-center justify-content-between">
                  <span>Africa</span>
                  <span>239 Users</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div className="chart-county-list">
                <div className="d-flex align-items-center justify-content-between">
                  <span>Australia</span>
                  <span>78 Users</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "10%" }}></div>
                </div>
              </div>

              <div className="chart-county-list">
                <div className="d-flex align-items-center justify-content-between">
                  <span>America</span>
                  <span>78 Users</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>

            <div className="vector-map-area">
              <div id="mapLocation" className="map-location">
                <WorldMap
                  color="#ae8ff7"
                  size={320}
                  data={countryData}
                  borderColor={darkMode ? "#fff" : "#000"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="map-see-details mt-4 border-top">
        SEE DETAILS{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.58742 3.65526C5.85767 3.43482 6.25584 3.45058 6.5081 3.70254L10.4028 7.59744C10.5333 7.728 10.604 7.90266 10.604 8.08384C10.604 8.26508 10.5334 8.43942 10.4028 8.57047L6.50802 12.4652C6.23899 12.7339 5.80352 12.7339 5.53519 12.4652C5.26606 12.1964 5.26606 11.7608 5.53511 11.4922L8.94315 8.08384L5.53519 4.6756C5.2829 4.42361 5.26712 4.02505 5.48786 3.75476L5.53516 3.7025L5.58742 3.65526Z"
            fill="#343A40"
          />
        </svg>
      </a>
    </div>
  );
};
export default MapLocationCard2;
