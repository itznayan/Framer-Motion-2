import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: "150vh" }}></div>
      <motion.div
        style={{
          height: "100vh",
          background: "black",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <div
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1.5s background",
        }}
        ref={ref}
      ></div>
    </>
  );
};

export default ViewBasedAnimations;
