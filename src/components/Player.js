import React, { useState } from "react";
import Pad from "./Pad";
import PlayerContext from "../contexts/PlayerContext";

const Player = ({ samples }) => {
  // 2 lists, one holds the waiting samples (after play click), second holds the currently playing
  const [waitingSamples, setWaitingSamples] = useState([]);
  const [playingSamples, setPlayingSamples] = useState([]);

  // play the waiting samples and play again the playing samples
  // finally reset the waiting list
  const playAll = () => {
    setPlayingSamples([...waitingSamples, ...playingSamples]);
    setWaitingSamples([]);
  };

  return (
    <PlayerContext.Provider // provide state management for samples
      value={{
        playingSamples,
        setPlayingSamples,
        waitingSamples,
        setWaitingSamples,
        playAll,
      }}
    >
      <div className="player">
        {samples.map((sample) => (
          <Pad
            key={sample.id}
            id={sample.id}
            title={sample.title}
            img_src={sample.img_src}
            sample_src={sample.sample_src}
          />
        ))}
      </div>
    </PlayerContext.Provider>
  );
};

export default Player;
