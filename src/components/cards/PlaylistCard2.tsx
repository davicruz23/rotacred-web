import ReactPlayer from "react-player";
import { useState, useRef } from "react";

const PlaylistCard2 = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  // Function to handle play/pause
  const togglePlayPause = () => {
    setPlaying((prev) => !prev);
  };
  // Format time from seconds to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <div className="playlist-card d-flex align-items-center">
      <div className="playlist-thumb">
        <img src="/img/bg-img/p2.jpg" alt="" />
      </div>
      <div className="px-3">
        <h6>Delving into The Latest Music Movements</h6>
        <p>
          Music | <span className="totalTime">{formatTime(duration)}</span>
        </p>

        <ReactPlayer
          ref={playerRef}
          url="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3"
          playing={playing}
          controls={false}
          onDuration={(duration) => setDuration(duration)}
          width="0"
          height="0"
        />
        <div className="playlist-btn-group">
          <a
            className="btn playPauseButton btn-primary rounded-pill"
            role="button"
            onClick={togglePlayPause}
          >
            {playing ? (
              <i className="ti ti-player-pause"></i>
            ) : (
              <i className="ti ti-player-play"></i>
            )}
          </a>

          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.419 15.732C21.419 19.31 19.31 21.419 15.732 21.419H7.95C4.363 21.419 2.25 19.31 2.25 15.732V7.932C2.25 4.359 3.564 2.25 7.143 2.25H9.143C9.861 2.251 10.537 2.588 10.967 3.163L11.88 4.377C12.312 4.951 12.988 5.289 13.706 5.29H16.536C20.123 5.29 21.447 7.116 21.447 10.767L21.419 15.732Z"
                stroke="#737B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.48096 13.4629H16.216"
                stroke="#737B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8485 9.0957L11.8485 17.8307"
                stroke="#737B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.1221 15.4365V3.39551"
                stroke="#737B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0381 12.5088L12.1221 15.4368L9.20609 12.5088"
                stroke="#737B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.7551 8.12793H17.6881C19.7231 8.12793 21.3721 9.77693 21.3721 11.813V16.697C21.3721 18.727 19.7271 20.372 17.6971 20.372H6.55707C4.52207 20.372 2.87207 18.722 2.87207 16.687V11.802C2.87207 9.77293 4.51807 8.12793 6.54707 8.12793H7.48907"
                stroke="#737B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.75C17.108 2.75 21.25 6.891 21.25 12C21.25 17.108 17.108 21.25 12 21.25C6.891 21.25 2.75 17.108 2.75 12C2.75 6.892 6.892 2.75 12 2.75Z"
                stroke="#737B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9393 12.0127H15.9483"
                stroke="#737B8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9301 12.0127H11.9391"
                stroke="#737B8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.92126 12.0127H7.93026"
                stroke="#737B8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default PlaylistCard2;
