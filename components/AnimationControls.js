import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const flipControls = useAnimationControls();
  const [event, setEvent] = useState(false);
  const handleClick = () => {
    setEvent(!event);
    flipControls.start(event ? "initial" : "flip");
    console.log(event);
  };
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip It
      </button>
      <motion.div
        variants={{
          initial: { rotate: 0 },
          flip: { rotate: 360 },
        }}
        initial="initial"
        style={{
          height: 100,
          width: 100,
          background: "black",
        }}
        animate={flipControls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
