import { useState } from "react";
import Slider from "@mui/material/Slider";

interface CustomSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

function CustomSlider({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
}: CustomSliderProps) {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div style={{ width: 300, margin: "20px" }}>
      <Slider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
      <p>Value: {value}</p>
    </div>
  );
}

export default CustomSlider;