import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { motion } from "framer-motion";

const Navbarcarpet = () => {
  const [open,] = useContext(Context)
  
  return (
    <motion.div
      layout
      className={`bg-skin-layoutcarpet col-start-[29] row-start-1 row-end-[19] shadow-sm shadow-black ${
        open === false ? "rounded-l-xl row-end-[22] " : "rounded-l-sm mb-4 ml-[1px] mr-[4px] "
      } rounded-e-xl max-xl:hidden`}
    ></motion.div>
  );
};

export default Navbarcarpet;
