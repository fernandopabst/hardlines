import React, { useContext } from "react";
import { HighContrast } from "react-dial-knob";
import { useSnapshot } from "valtio";
import { MyContext } from "./App";

export default function DonutComponent() {
  const state = useContext(MyContext);
  const snap = useSnapshot(state);
  return (
    <HighContrast
      diameter={100}
      min={2}
      max={36}
      step={2}
      value={snap.pixels}
      theme={{
        defaultColor: "black",
        activeColor: "#FF5E2F",
      }}
      onValueChange={(v) => (state.pixels = v)}
      ariaLabelledBy={"my-label"}
    ></HighContrast>
  );
}
