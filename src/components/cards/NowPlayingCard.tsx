import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { nowPaylist } from "../../data"; // Import your playlist

const NowPlayingCard: React.FC = () => {
  const [activeSong, setActiveSong] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const playerRef = useRef<ReactPlayer | null>(null);

  // Function to handle play/pause
  const togglePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  // Function to handle the next track
  const handleNext = () => {
    setActiveSong((prevIndex) => (prevIndex + 1) % nowPaylist.length);
    setPlaying(true);
  };

  // Function to handle the previous track
  const handlePrevious = () => {
    setActiveSong(
      (prevIndex) => (prevIndex - 1 + nowPaylist.length) % nowPaylist.length
    );
    setPlaying(true);
  };

  // Function to skip backward
  const skipBackward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(currentTime - 10, "seconds");
    }
  };

  // Function to skip forward
  const skipForward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(currentTime + 10, "seconds");
    }
  };

  // Format time from seconds to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="card now-playing-card">
      <h5>Now Playing</h5>
      <div className="playing-audio">
        <div className="nowPlayerAudioWrap">
          <div id="player">
            <div id="player-track">
              <div className="backside-img">
                <img src="/img/bg-img/nowPlaying3.png" alt="Background" />
              </div>
              <div id="album-art">
                {nowPaylist.map((song, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${song.img})`,
                    }}
                    className={activeSong === index ? "active" : ""}
                  ></div>
                ))}
              </div>

              <h5 className="track-title" id="track-name">
                {nowPaylist[activeSong].title}
              </h5>
              <span className="album-name d-block text-center" id="album-name">
                {nowPaylist[activeSong].album}
              </span>

              <ReactPlayer
                ref={playerRef}
                url={nowPaylist[activeSong].trackUrl}
                playing={playing}
                controls={false}
                width="0"
                height="0"
                onProgress={({ playedSeconds }) =>
                  setCurrentTime(playedSeconds)
                }
                onDuration={(duration) => setDuration(duration)}
              />

              <div id="s-area">
                <div
                  id="seek-bar"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>

              <div id="track-time">
                <div id="current-time">{formatTime(currentTime)}</div>
                <div id="track-length">{formatTime(duration)}</div>
              </div>
            </div>

            <div id="player-content" className="mt-4">
              <div
                className="d-flex align-items-center justify-content-between"
                id="player-controls"
              >
                <div className="control">
                  <button
                    className="button"
                    id="play-previous"
                    onClick={handlePrevious}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.2383 7.21957V16.7896C20.2383 18.7496 18.1083 19.9796 16.4083 18.9996L12.2583 16.6096L8.1083 14.2096C6.4083 13.2296 6.4083 10.7796 8.1083 9.79957L12.2583 7.39957L16.4083 5.00957C18.1083 4.02957 20.2383 5.24957 20.2383 7.21957Z"
                        fill="#737B8B"
                      />
                      <path
                        d="M3.76169 18.9303C4.17169 18.9303 4.51169 18.5903 4.51169 18.1803V5.82031C4.51169 5.41031 4.17169 5.07031 3.76169 5.07031C3.35169 5.07031 3.01169 5.41031 3.01169 5.82031V18.1803C3.01169 18.5903 3.34169 18.9303 3.76169 18.9303Z"
                        fill="#737B8B"
                      />
                    </svg>
                  </button>
                </div>

                <div className="control">
                  <button
                    className="button sec-button"
                    id="skip-backward-button"
                    onClick={skipBackward}
                  >
                    <i className="ti ti-rotate-2"></i>
                    <span className="sec">10</span>
                  </button>
                </div>

                <div className="control">
                  <button
                    className="button playPause"
                    id="play-pause-button"
                    onClick={togglePlayPause}
                  >
                    {playing ? (
                      <i className="fas fa-pause"></i>
                    ) : (
                      <i className="fas fa-play"></i>
                    )}
                  </button>
                </div>

                <div className="control">
                  <button
                    className="button sec-button"
                    id="skip-forward-button"
                    onClick={skipForward}
                  >
                    <i className="ti ti-rotate-clockwise-2"></i>
                    <span className="sec">10</span>
                  </button>
                </div>

                <div className="control">
                  <button
                    className="button"
                    id="play-next"
                    onClick={handleNext}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
                        fill="#737B8B"
                      />
                      <path
                        d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
                        fill="#737B8B"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingCard;
