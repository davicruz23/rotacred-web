import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { playlistData } from "../../data";
import EllipsisIcon from "../utils/icons/EllipsisIcon";
import PlaylistTableHeader from "../header/table-header/PlaylistTableHeader";

const PlaylistTable = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (activeDropdown !== null && dropdownRefs?.current[activeDropdown]) {
        if (
          !dropdownRefs?.current[activeDropdown]?.contains(event.target as Node)
        ) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: number) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownButtonClick = (dropdown: number) => {
    toggleDropdown(dropdown);
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Audio Player
  const playerRef = useRef<Record<number, ReactPlayer | null>>({});
  const [playing, setPlaying] = useState<number | null>(null);
  const [duration, setDuration] = useState<Record<number, number>>({});

  const togglePlayPause = (itemId: number) => {
    setPlaying(playing === itemId ? null : itemId);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleDuration = (itemId: number, duration: number) => {
    setDuration((prev) => ({ ...prev, [itemId]: duration }));
  };

  return (
    <div className="playlist-table-card">
      <PlaylistTableHeader />

      <div className="table-responsive">
        <table className="table playlist-table" id="playlistTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Start Podcast</th>
              <th>Playlist</th>
              <th>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_6_5745)">
                    <path
                      d="M11.5503 2.57793C10.1275 0.679181 7.86771 -0.26232 5.51396 0.0620138C2.59963 0.462764 0.291959 2.88535 0.026542 5.82301C-0.119291 7.43885 0.339209 9.03193 1.31863 10.3094C1.59688 10.6734 1.74971 11.1611 1.74971 11.6832V12.2496C1.74971 13.2144 2.53488 13.9996 3.49971 13.9996H7.58304C8.54788 13.9996 9.33304 13.2144 9.33304 12.2496H9.62121C11.0784 12.2496 12.3215 11.1605 12.5128 9.71501L12.6405 8.7496H12.833C13.5908 8.7496 13.9997 8.14876 13.9997 7.58293C13.9997 6.7546 12.2894 3.49201 11.5503 2.57793ZM6.41638 5.25018C7.05979 5.25018 7.58304 5.77343 7.58304 6.41685C7.58304 7.06026 7.05979 7.58351 6.41638 7.58351C5.77296 7.58351 5.24971 7.06026 5.24971 6.41685C5.24971 5.77343 5.77296 5.25018 6.41638 5.25018ZM12.1295 7.58351C11.8367 7.58351 11.5894 7.80051 11.5515 8.09043L11.3566 9.56218C11.2417 10.429 10.4956 11.0829 9.62121 11.0829H8.74971C8.42713 11.0829 8.16638 11.3437 8.16638 11.6663V12.2496C8.16638 12.5716 7.90504 12.8329 7.58304 12.8329H3.49971C3.17771 12.8329 2.91638 12.5716 2.91638 12.2496V11.6832C2.91638 10.9062 2.67779 10.1659 2.24496 9.6001C1.44463 8.55535 1.06896 7.25101 1.18854 5.92743C1.40554 3.52526 3.29088 1.54426 5.67263 1.2176C5.72629 1.21001 5.77996 1.2036 5.83304 1.19776V4.15643C4.82738 4.41601 4.08304 5.33068 4.08304 6.41626C4.08304 7.7031 5.12954 8.7496 6.41638 8.7496C7.70321 8.7496 8.74971 7.7031 8.74971 6.41626C8.74971 5.33068 8.00538 4.41601 6.99971 4.15643V1.19835C8.42771 1.35468 9.72563 2.08851 10.6298 3.29485C11.3922 4.23751 12.759 7.0591 12.8319 7.5841H12.1295V7.58351Z"
                      fill="#737B8B"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_5745">
                      <rect width="14" height="14" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_6_5743)">
                    <path
                      d="M7 14C3.14008 14 0 10.8599 0 7C0 3.14008 3.14008 0 7 0C10.8599 0 14 3.14008 14 7C14 10.8599 10.8599 14 7 14ZM7 1.16667C3.7835 1.16667 1.16667 3.7835 1.16667 7C1.16667 10.2165 3.7835 12.8333 7 12.8333C10.2165 12.8333 12.8333 10.2165 12.8333 7C12.8333 3.7835 10.2165 1.16667 7 1.16667ZM9.91667 7C9.91667 6.67742 9.65592 6.41667 9.33333 6.41667H7.58333V3.5C7.58333 3.17742 7.322 2.91667 7 2.91667C6.678 2.91667 6.41667 3.17742 6.41667 3.5V7C6.41667 7.32258 6.678 7.58333 7 7.58333H9.33333C9.65592 7.58333 9.91667 7.32258 9.91667 7Z"
                      fill="#737B8B"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_5743">
                      <rect width="14" height="14" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {playlistData.map((item) => (
              <tr key={item.id}>
                <td>
                  <ReactPlayer
                    ref={(ref) => (playerRef.current[item.id] = ref)}
                    url={item.audioSrc}
                    playing={item.id === playing}
                    controls={false}
                    width="0"
                    height="0"
                    onDuration={(duration) => handleDuration(item.id, duration)}
                  />
                  <a
                    className="playPauseButton"
                    onClick={() => togglePlayPause(item.id)}
                  >
                    {playing === item.id ? (
                      <i className="ti ti-player-pause"></i>
                    ) : (
                      <i className="ti ti-player-play"></i>
                    )}
                  </a>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={item.imgSrc} alt="" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">{item.title}</h6>
                      <p className="mb-0">{item.author}</p>
                    </div>
                  </div>
                </td>
                <td>{item.playlist}</td>
                <td>{item.playedAmount}</td>
                <td>
                  <span className="totalTime">
                    {formatTime(duration[item.id] || 0)}
                  </span>
                </td>
                <td>
                  <div
                    className="dropdown"
                    ref={(ref) => (dropdownRefs.current[item.id] = ref)}
                  >
                    <button
                      className={`btn dashboard-btn dropdown-toggle-after-hidden show ${
                        activeDropdown === item.id ? "show" : ""
                      }`}
                      onClick={() => handleDropdownButtonClick(item.id)}
                    >
                      <EllipsisIcon />
                    </button>

                    <div
                      className={`dropdown-menu dropdown-menu-end ${
                        activeDropdown === item.id ? "show" : ""
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PlaylistTable;
