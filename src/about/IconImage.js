import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useLayoutEffect, useState } from 'react';
import classes from "./IconImage.module.css";
import profileImg from '../images/bitmoji1.png';

function IconImage({ lineHeight }) {
  const [pageHeight, setPageHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(scrollY.get());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  console.log('ScrollY:', scrollPosition);
  console.log("lineheight", lineHeight);

  const yRange = [0, lineHeight];
  const rotationRange = [-720, 720];
  const translateYRange = [0, lineHeight];

  useEffect(() => {
    const fullPageHeight = document.body.scrollHeight;
    const fullPageWidth = document.body.scrollWidth;
    const fullScreenHeight = window.innerHeight;
    setPageHeight(fullPageHeight);
    setPageWidth(fullPageWidth);
    setScreenHeight(fullScreenHeight);
  }, []);

  const rotation = useTransform(scrollY, yRange, rotationRange);
  const translateY = useTransform(scrollY, yRange, translateYRange);


  return (
    <motion.div className={classes["icon-container"]}>
      <motion.img
        src={profileImg}
        alt="small bitmoji"
        className={classes["icon-image"]}
        style={{ rotate: rotation, translateY: translateY }}

      />
    </motion.div>
  )
}

export default IconImage;



  // const [pageHeight, setPageHeight] = useState(0);
  // const { scrollY } = useScroll();

  // useLayoutEffect(() => {
  //   setPageHeight(document.body.scrollHeight);
  // }, []);

  // const thresholdScrollPosition = pageHeight * 0.95;

  // const yRange = [0, pageHeight];
  // const rotationRange = [-720, 720];
  // const translateYRange = [0, pageHeight];

  // const rotation = useTransform(scrollY, yRange, rotationRange);
  // const translateY = useTransform(scrollY, yRange, translateYRange);

    // let translateYMultiplier;
  // if (screenHeight < 600) {
  //   translateYMultiplier = 1.1;
  // } else if (screenHeight >= 600 && screenHeight < 800) {
  //   translateYMultiplier = 1.2;
  // } else if (screenHeight >= 800 && screenHeight < 1000) {
  //   translateYMultiplier = 1.3;
  // } else {
  //   translateYMultiplier = 1.6;
  // }
