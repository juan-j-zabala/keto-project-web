import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navlink = ({ ruta = null, title = null, css }) => {
  return (
    <>
      {ruta ? (
        <motion.h1
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          // transition={{ type: "spring", stiffness: 150 }}
          className={`${css}`}
        >
          <Link to={ruta} className={`${css}`}>
            {title}
          </Link>
        </motion.h1>
      ) : (
        <motion.h1
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          // transition={{ type: "spring", stiffness: 150 }}
          className={`${css}`}
        >
          {title}
        </motion.h1>
      )}
    </>
  );
};

export default Navlink;
