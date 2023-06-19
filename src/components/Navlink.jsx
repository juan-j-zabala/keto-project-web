import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";

const Navlink = ({ ruta = null, title = null, css }) => {
  const [, setThemecolor] = useContext(Context)

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
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          // transition={{ type: "spring", stiffness: 150 }}
          className={`${css}`}
          onClick={() => setThemecolor(title)}
        >
          {title}
        </motion.button>
      )}
    </>
  );
};

export default Navlink;
