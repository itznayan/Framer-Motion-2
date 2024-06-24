import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: 0, scale: 0, y: 0 }}
            animate={{
              rotate: 180,
              scale: 1,
              y: [-150, 75, 20, 0],
              x: [150, 75, 20, 0],
            }}
            transition={{
              type: "spring",
              duration: 1,
              times: [0, 0.25, 0.5, 1],
            }}
            exit={{ rotate: 0, scale: 0, y: 0 }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
