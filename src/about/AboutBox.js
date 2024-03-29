import classes from "./AboutBox.module.css";
import { useRef } from "react";
import { useInView } from 'framer-motion';

function AboutBox({ id, title, texts, gridArea }) {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  const boxText = texts.map((text, index) => (
    <p key={`${id}-${index}`}>{text}</p>
  ))
  return (
    <div
      style={{
        gridArea,
        background: isInView ? "rgb(245, 138, 7, 0.1)" : "rgb(245, 138, 7, 0.4)",
        opacity: isInView ? 1 : 0.5,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}
      className={classes["about-box"]}
    >
      <h2>{title}</h2>
      <div>{boxText}</div>
      <div ref={titleRef} className={classes["about-box-marker"]}></div>
    </div>
  )
}

export default AboutBox;
