import PropTypes from "prop-types";
import { motion } from "framer-motion";

function FrameAI({ controls }) {
  return (
    <>
      <motion.img
        src="./Vector 1.png"
        animate={controls}
        initial={{ opacity: 0 }}
        style={{ zIndex: -5, position: "absolute" }}
      ></motion.img>
      {/* <motion.div
        style={{ position: "absolute" }}
        animate={controls}
        initial={{ opacity: 0 }}
      >
        Vigilantly Detecting Tampered Images, <br /> Guaranteeing the Unaltered
        Authenticity <br /> of Every Image Within TrustStamp&apos;s <br />{" "}
        Secure Domain.
      </motion.div> */}
    </>
  );
}

FrameAI.propTypes = {
  controls: PropTypes.object.isRequired,
};

export default FrameAI;
