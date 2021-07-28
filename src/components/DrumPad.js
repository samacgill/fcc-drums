import React, { useEffect, useCallback } from "react";
import { notes } from "../notes";
import { Button } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";

export default function DrumPad(props) {
  const rippleRef = React.useRef(null);
  const triggerRipple = () => {
    rippleRef.current.start();
    setTimeout(() => {
      rippleRef.current.stop({});
    }, 500);
  };

  const playSound = () => {
    const audio = document.getElementById(props.id);
    audio.currentTime = 0;
    audio.volume = props.volume / 100;
    audio.play();
    props.changeIsPlaying(notes[props.id].title);
  };

  const handleClick = () => {
    playSound();
    triggerRipple();
  };

  useEffect(() => {
    const handleOnKeyDown = (e) => {
      if (e.keyCode === notes[props.id].keyCode) {
        playSound();
        triggerRipple();
      }
    };
    window.addEventListener("keydown", handleOnKeyDown);
  }, [props.id, playSound]);

  return (
    <div className="drum-pad" id={`${props.id}-pad`} onClick={handleClick}>
      <Button
        variant="contained"
        color="primary"
        style={{ fontSize: "2rem" }}
        disableRipple={true}
      >
        {props.id}
        <TouchRipple ref={rippleRef} center />
      </Button>
      <audio
        src={`${process.env.PUBLIC_URL}/sounds/${notes[props.id].file}`}
        className="clip"
        id={props.id}
      />
    </div>
  );
}
