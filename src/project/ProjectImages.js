import classes from "./ProjectImages.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ProjectImages({ images, orientation }) {
  const [imageIndex, setImageIndex] = useState(0);

  const imageAdj = orientation === "portrait" ? 0 : 1;

  useEffect(() => {
    const updateIndex = (newIndex) => {
      if (newIndex >= images.length - imageAdj || newIndex < 0) {
        newIndex = 0;
      }
      setImageIndex(newIndex);
    };

    const interval = setInterval(() => {
      updateIndex(imageIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [imageIndex, images.length]);

  const imagesContent = (
    images.map((img) => {
      return <motion.img
        key={img}
        src={img}
        alt=""
        className={`${classes[`project-image-${orientation}`]} ${classes["project-image"]}`}
        initial={{ y: 0 }}
        animate={{y: `-${imageIndex * 100}%`}}
        transition={{ type: "spring", bounce: 0.2 }}
        exit={{y: "100%"}}
      />
    })
  )

  return (
    <motion.div className={classes[`project-image_carousel-${orientation}`]}>
      {imagesContent}
    </motion.div>
  )
}

export default ProjectImages;
