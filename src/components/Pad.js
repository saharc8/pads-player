import React, { useState, useRef, useEffect, useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import Controls from "./Controls";

const Pad = ({ id, title, img_src, sample_src }) => {
  const audioEl = useRef(null); //js audio element ref
  const [isPlaying, setIsPlaying] = useState(false); //boolean state check if somthing playing
  const [canPlay, setCanPlay] = useState(true); //boolean state check if we can play
  const imagesPath = "./images/";
  const samplesPath = "./samples/";

  const { currentlyPlaying, toogleCurrentlyPlaying } =
    useContext(PlayerContext); //consumer

  // manage the view, we have 2 options:
  // nothing playing - all buttons free
  // one sample playing - his button become pause button, another buttons locked
  useEffect(() => {
    if (currentlyPlaying === id) {
      audioEl.current.play();
      setIsPlaying(true);
      setCanPlay(true);
    } else if (currentlyPlaying === null) {
      audioEl.current.pause();
      setIsPlaying(false);
      setCanPlay(true);
    } else {
      audioEl.current.pause();
      setIsPlaying(false);
      setCanPlay(false);
    }
  }, [currentlyPlaying, id]);

  //run the toogle function
  const onClickPlay = () => {
    toogleCurrentlyPlaying(id);
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
      <Controls //playing the samples and manage buttons styles
        isPlaying={isPlaying}
        onClickPlay={onClickPlay}
        canPlay={canPlay}
      />
      <audio
        className="pad_audio"
        src={samplesPath + sample_src}
        ref={audioEl}
        controls
      ></audio>
    </div>
  );
};

export default Pad;
