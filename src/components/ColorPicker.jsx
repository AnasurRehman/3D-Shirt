import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={["#CCC", "#FF0000", "#00FF00"]}
      />
    </div>
  );
};

export default ColorPicker;
