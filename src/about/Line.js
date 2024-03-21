import React, { useRef, useState, useEffect } from 'react';
import classes from "./Line.module.css";

function Line({ updateLineHeight }) {
  const lineRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      const height = lineRef.current.getBoundingClientRect().height;
      updateLineHeight(height);
    }
  }, [updateLineHeight]);

  return (
    <div className={classes["about-line"]} ref={lineRef} />
  )
}

export default Line;
