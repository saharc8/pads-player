import React, { useState, useRef, useEffect, useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import Controls from "./Controls";

const Pad = ({ id, title, img_src, sample_src }) => {
  const imagesPath = "./images/";
  const samplesPath = "./samples/";
  const audioEl = useRef(null); // js audio element ref
  const [isPlaying, setIsPlaying] = useState(false); // bollean state indicate if on play or not

  const {
    playingSamples,
    setPlayingSamples,
    waitingSamples,
    setWaitingSamples,
    playAll,
  } = useContext(PlayerContext); // consumer

  // playing the samples
  useEffect(() => {
    if (playingSamples.includes(id)) {
      console.log("playing", id, playingSamples);
      audioEl.current.play();
      setIsPlaying(true);
    } else {
      console.log("off", id, playingSamples);
      audioEl.current.pause();
      setIsPlaying(false);
    }
  }, [playingSamples, id]);

  // manage remove samples from lists
  const removeSamples = () => {
    // remove sample from waiting list if we click pause before start playing
    const index1 = waitingSamples.indexOf(id);
    if (index1 !== -1) {
      console.log(`remove ${id} from waiting list`, waitingSamples);
      setWaitingSamples((waitingSamples) => {
        waitingSamples.splice(index1, 1);
        return [...waitingSamples];
      });
      setIsPlaying(false);
    }

    // remove sample from playing list if we click pause after start playing
    const index2 = playingSamples.indexOf(id);
    if (index2 !== -1) {
      console.log(`remove ${id} from playing list`, playingSamples);
      setPlayingSamples((playingSamples) => {
        playingSamples.splice(index2, 1);
        return [...playingSamples];
      });
    }
  };

  // manage playing state
  const onPlay = () => {
    // first playing, when isPlaying off and playing list is empty
    if (!isPlaying) {
      if (playingSamples.length === 0) {
        console.log("playing first sample", id);
        return setPlayingSamples([id]);
      }
      // add samples are clicked to the waiting list
      console.log(id, "added to the waiting list");
      setWaitingSamples((waitingSamples) => [...waitingSamples, id]);
      setIsPlaying(true);
    } else {
      removeSamples();
    }
  };

  return (
    <div className="pad">
      <h4
        style={{
          display: isPlaying ? "inline-block" : "none",
        }}
      >
        Playing Now
      </h4>
      <div className="pad_img">
        <img src={imagesPath + img_src} alt="cover"></img>
      </div>
      <h3 className="pad_title">{title}</h3>
      <Controls // trigger of playing samples and manage buttons styles
        isPlaying={isPlaying}
        onPlay={onPlay}
      />
      <audio
        className="pad_audio"
        src={samplesPath + sample_src}
        ref={audioEl}
        onEnded={playAll} // indicate if sample playing ended, and run playAll for the loop repeat. ensures that the waiting samples are played after sample ends
        controls
      ></audio>
    </div>
  );
};

export default Pad;
