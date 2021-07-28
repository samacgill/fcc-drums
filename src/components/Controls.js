import React from "react";
import { Slider, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import { VolumeUp, VolumeDown } from "@material-ui/icons";
import { ColorSwitch } from "../utilities/brand";

export default function Controls(props) {
  // const playing = props.isPlaying;
  const handleVolumeChange = (e, newValue) => {
    console.log(e);

    props.changeVolume(newValue);
  };
  const handleChangeOnoff = (e) => {
    props.changeOnoff(e.target.checked);
  };
  const handleChangeRange = (e) => {
    props.changeRange(e.target.value);
  };
  return (
    <div className="Controls">
      <FormControlLabel
        control={
          <ColorSwitch
            name="onoffSwitch"
            value={props.isOn}
            onChange={handleChangeOnoff}
          />
        }
        label={props.isOn ? "On" : "Click to activate"}
      />
      {props.isOn && (
        <>
          <RadioGroup row value={props.range} onChange={handleChangeRange}>
            <FormControlLabel value="Drums" control={<Radio />} label="Drums" />
            <FormControlLabel value="Piano" control={<Radio />} label="Piano" />
          </RadioGroup>

          <div id="display" className="Controls-playing">
            {props.isPlaying}
          </div>
          <div className="Controls-volume">
            <VolumeDown color="primary" />
            <Slider
              value={props.volume}
              onChange={handleVolumeChange}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              color="secondary"
            />
            <VolumeUp color="primary" />
          </div>
        </>
      )}
    </div>
  );
}
