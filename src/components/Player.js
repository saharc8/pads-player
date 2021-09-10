import React, { useState } from "react";
import Pad from "./Pad";
import PlayerContext from "../contexts/PlayerContext";

const Player = ({ samples }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  //toogle id between the currect playing sample
  const toogleCurrentlyPlaying = (id) => {
    if (currentlyPlaying === id) {
      return setCurrentlyPlaying(null);
    }
    setCurrentlyPlaying(id);
  };

  return (
    <PlayerContext.Provider
      value={{ currentlyPlaying, toogleCurrentlyPlaying }} //provide state management for the currently playing
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
