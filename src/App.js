import React, { useState } from "react";
import Player from "./components/Player";

function App() {
  const [samples] = useState([
    {
      id: 1,
      title: "120_future_funk_beats_25",
      img_src: "82obo.jpg",
      sample_src: "120_future_funk_beats_25.mp3",
    },
    {
      id: 2,
      title: "120_stutter_breakbeats_16",
      img_src: "denise.jpg",
      sample_src: "120_stutter_breakbeats_16.mp3",
    },
    {
      id: 3,
      title: "Bass Warwick heavy funk groove on E 120 BPM",
      img_src: "erik.jpg",
      sample_src: "Bass Warwick heavy funk groove on E 120 BPM.mp3",
    },
    {
      id: 4,
      title: "electric guitar coutry slide 120bpm - B",
      img_src: "ilyuza.jpg",
      sample_src: "electric guitar coutry slide 120bpm - B.mp3",
    },
    {
      id: 5,
      title: "FUD_120_StompySlosh",
      img_src: "israel.jpg",
      sample_src: "FUD_120_StompySlosh.mp3",
    },
    {
      id: 6,
      title: "GrooveB_120bpm_Tanggu",
      img_src: "kari.jpg",
      sample_src: "GrooveB_120bpm_Tanggu.mp3",
    },
    {
      id: 7,
      title: "MazePolitics_120_Perc",
      img_src: "marcela.jpg",
      sample_src: "MazePolitics_120_Perc.mp3",
    },
    {
      id: 8,
      title: "PAS3GROOVE1.03B",
      img_src: "namroud.jpg",
      sample_src: "PAS3GROOVE1.03B.mp3",
    },
    {
      id: 9,
      title: "SilentStar_120_Em_OrganSynth",
      img_src: "sam.jpg",
      sample_src: "SilentStar_120_Em_OrganSynth.mp3",
    },
  ]);

  return (
    <div className="App">
      <Player samples={samples} />
    </div>
  );
}

export default App;
