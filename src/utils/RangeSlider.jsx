import React, { useState, useRef, useEffect } from "react";

const RangeSlider = ({min=0, max=100, step=1, current=min ,onChange}) => {
  const [value, setValue] = useState(current);
  const thumbRef = useRef(null);
  const inputRef = useRef(null);


  const handleChange = (event) => {
    setValue(event.target.value);
    if(onChange){
        onChange(event.target.value);
    }
  };

  useEffect(() => {
    const thumbWidth = thumbRef.current.offsetWidth - 10;
    const inputWidth = inputRef.current.offsetWidth + 15;
    const pos = (value - min)/(max - min);
    const thumbCorrect = thumbWidth * (pos - 0.5) * -1;
    const labelPosition = Math.round( ( pos * inputWidth ) - thumbWidth / 8 + thumbCorrect );
    thumbRef.current.style.left = `${labelPosition}px`;
  }, [value]);

  return (
    <div className="slider-container relative">
      <span className="min-label">{min}</span>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        step={step}
        ref={inputRef}
        onChange={handleChange}
      />
      <span className="max-label">{max}</span>
      <span
        className="current-value"
        ref={thumbRef}
      >
        {value}
      </span>
    </div>
  );
};

export default RangeSlider;