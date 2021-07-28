import React, { useState } from "react";
import DrumPads from "./DrumPads";
import Controls from "./Controls";

export default function DrumMachine() {
  const [volume, setVolume] = useState(30);
  const [isOn, setIsOn] = useState(true);
  const [range, setRange] = useState("Drums");
  const [isPlaying, setIsPlaying] = useState("Waiting...");

  const changeOnoff = (newOnOff) => {
    setIsOn(newOnOff);
  };
  const changeVolume = (newVolume) => {
    setVolume(newVolume);
  };
  const changeRange = (newRange) => {
    setRange(newRange);
  };
  const changeIsPlaying = (newIsPlaying) => {
    setIsPlaying(newIsPlaying);
  };

  return (
    <div className="DrumMachine">
      <DrumPads
        isOn={isOn}
        volume={volume}
        range={range}
        changeOnoff={changeOnoff}
        changeVolume={changeVolume}
        changeRange={changeRange}
        changeIsPlaying={changeIsPlaying}
      />
      <Controls
        isPlaying={isPlaying}
        isOn={isOn}
        volume={volume}
        range={range}
        changeOnoff={changeOnoff}
        changeVolume={changeVolume}
        changeRange={changeRange}
      />
    </div>
  );
}
