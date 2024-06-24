import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig transition={{ duration: 0.1, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9, rotate: 2.5 }}
          className="example-button"
        >
          Click Me
        </motion.button>
        <motion.button
          style={{ backgroundColor: "red" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9, rotate: 2.5 }}
          className="example-button"
        >
          Click Me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
