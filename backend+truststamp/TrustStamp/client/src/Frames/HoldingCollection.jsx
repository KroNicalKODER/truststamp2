import PropTypes from "prop-types";
import { motion } from "framer-motion";

function HoldingCollection({ controls }) {
  return (
    <motion.h2
      animate={controls}
      initial={{ opacity: 0 }}
      style={{ fontFamily: "Monteserrat", fontSize: "1.3vw", y: "10vh" }}
    >
      Holding <span style={{ color: "#EB0BFF" }}>Control</span>
    </motion.h2>
  );
}

HoldingCollection.propTypes = {
  controls: PropTypes.object.isRequired,
};

export default HoldingCollection;
