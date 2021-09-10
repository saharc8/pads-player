import React from "react";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Controls = ({ isPlaying, onClickPlay, canPlay }) => {
  return (
    <div className="controls">
      <button
        className="controls_play_btn"
        onClick={() => {
          onClickPlay(); //actually play the sample and updating the current playing sample
        }}
        style={{
          opacity: !canPlay ? "0.3" : "1",
          pointerEvents: !canPlay ? "none" : "auto",
        }}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
    </div>
  );
};

export default Controls;
