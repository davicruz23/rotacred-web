import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import { Tooltip } from "react-tooltip";

const PodcastBannerCard = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  // Function to handle play/pause
  const togglePlayPause = () => {
    setPlaying((prev) => !prev);
  };
  return (
    <div
      className="welcome-audio-player"
      style={{ backgroundImage: "url('/img/bg-img/podcast-hero.png')" }}
    >
      <div className="audio-content">
        <h4>Listen To Trending</h4>
        <h1>
          Song all The
          <br />
          Time.
        </h1>

        <div className="audio-btn-group">
          <ReactPlayer
            ref={playerRef}
            url="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3"
            playing={playing}
            controls={false}
            width="0"
            height="0"
          />

          <a
            href="#"
            id="play-pause-btn"
            className="btn btn-lg playing-btn"
            onClick={togglePlayPause}
          >
            {playing ? (
              <>
                <i className="ti ti-player-pause"></i>
                Pause
              </>
            ) : (
              <>
                <i className="ti ti-player-play"></i>
                Now Playing
              </>
            )}
          </a>
          <a
            href="#"
            className="btn btn-icon"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Love this"
            data-tooltip-place="top"
          >
            <i className="ti ti-heart"></i>
          </a>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};
export default PodcastBannerCard;
