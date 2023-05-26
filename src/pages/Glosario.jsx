import { motion } from "framer-motion";
import Glosariocarpet from "../components/Glosariocarpet";
import Glosariolista from "../components/Glosariolista";
import { Outlet } from "react-router-dom";

const Glosario = () => {
  return (
    <>
      <motion.div
        className="
        bg-transparent grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(29,1fr)] max-xl:hidden
      xl:col-start-1 xl:col-end-[23] xl:row-start-1 xl:row-end-[12] xl:mb-3 xl:ml-3 xl:mt-3 xl:mr-3 xl:rounded-xl"
      >
        <Outlet/>
        {/* <Glosariocarpet />   */}
        <Glosariolista />
      </motion.div>
    </>
  );
};

export default Glosario;
