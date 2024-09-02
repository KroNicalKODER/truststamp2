import PropTypes from 'prop-types';
import { motion } from "framer-motion";

function Frame3({controls}) {
  return (
    <motion.img
      src="./Frame 3.png"
      animate={controls}
      initial={{ opacity: 0 }}
      style={{width: '22vw', height: '26vw'}}
    ></motion.img>
  );
}

Frame3.propTypes = {
  controls: PropTypes.object.isRequired,
};

export default Frame3;