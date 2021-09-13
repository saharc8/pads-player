import React from "react";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Controls = ({ isPlaying, onPlay }) => {
  return (
    <div className="controls">
      <button
        className="controls_play_btn"
        onClick={() => {
          onPlay(); // actually trigger playing samples
        }}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
    </div>
  );
};

export default Controls;
