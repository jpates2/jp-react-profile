import React, { useState, useEffect } from 'react';
import IconImage from "./IconImage";
import Line from "./Line";
import classes from "./Slider.module.css";

function Slider() {
  const [lineHeight, setLineHeight] = useState(0);

  const updateLineHeight = (height) => {
    setLineHeight(height)
  }

  return (
    <div className={classes["slider-section"]}>
      <Line updateLineHeight={updateLineHeight} />
      <IconImage lineHeight={lineHeight} />
    </div>
  )
}

export default Slider;
