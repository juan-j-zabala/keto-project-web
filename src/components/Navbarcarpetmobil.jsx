import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { motion } from "framer-motion";

const Navbarcarpetmobil = () => {
  const [open] = useContext(Context);

  return (
    <motion.div
      layout
      className={`bg-skin-layoutcarpet col-start-2 rounded-sm mt-[1px] mb-[-5px] row-start-1 row-end-2 xl:hidden ${
        open === false ? "col-end-[28]" : "col-end-[24] mr-[3%]"
      } `}
    ></motion.div>
  );
};

export default Navbarcarpetmobil;
