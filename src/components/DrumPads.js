import React from "react";
import DrumPad from "./DrumPad";
import { notes } from "../notes";

export default function DrumPads(props) {
  const letters = Object.keys(notes);
  const pads = letters.map((letter) => {
    return (
      <DrumPad
        id={letter}
        key={letter}
        volume={props.volume}
        changeIsPlaying={props.changeIsPlaying}
      />
    );
  });
  return <div className="DrumPads">{pads}</div>;
}
