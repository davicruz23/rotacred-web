import { topEpisodes } from "../../data";
import { useRef, useState } from "react";

import ReactPlayer from "react-player";

const TopEpisodeCard = () => {
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
    <div className="top-episodes mt-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="mb-0 card-title">Top Eposides</h5>
        <a href="#" className="btn btn-sm btn-line">
          See all
        </a>
      </div>
      {topEpisodes.map((item) => (
        <div
          className="single-episode d-flex align-items-center justify-content-between"
          key={item.id}
        >
          <div className="d-flex align-items-center">
            <div className="track-thumbnail position-relative">
              <img src={item.img} alt="" />
              <div className="status"></div>
            </div>
            <div className="ms-2 me-3">
              <span className="catagory">
                {item.category} <i className="ti ti-activity-heartbeat"></i>
              </span>
              <h6 className="track-title mb-0">{item.title}</h6>
            </div>
          </div>
          <div className="text-center">
            <ReactPlayer
              ref={(ref) => (playerRef.current[item.id] = ref)}
              url={item.audioSrc}
              playing={item.id === playing}
              controls={false}
              width="0"
              height="0"
              onDuration={(duration) => handleDuration(item.id, duration)}
            />
            <button
              className="playPauseButton mt-2"
              onClick={() => togglePlayPause(item.id)}
            >
              {playing === item.id ? (
                <i className="ti ti-player-pause"></i>
              ) : (
                <i className="ti ti-player-play"></i>
              )}
            </button>
            <span className="totalTime">
              {formatTime(duration[item.id] || 0)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TopEpisodeCard;
