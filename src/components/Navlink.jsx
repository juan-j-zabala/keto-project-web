import { motion } from "framer-motion";

const Navlink = ({ ruta = null, title = null, css }) => {
  return (
    <>
      {ruta ? (
        <a href={ruta} className={`${css}`}>
          {title}
        </a>
      ) : (
        <motion.h1
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 150 }}
          className={`${css}`}
        >
          {title}
        </motion.h1>
      )}
    </>
  );
};

export default Navlink;
