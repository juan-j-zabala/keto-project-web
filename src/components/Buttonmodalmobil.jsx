import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Svgimg from "./Svgimg";
import menu from "../assets/menu-burger-svgrepo-com.svg";
import Buttonsmodalsmobil from "./Buttonsmodalsmobil";
import close from "../assets/close-square-svgrepo-com.svg";

const Buttonmodalmobil = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      <motion.div
        className="flex justify-center items-center col-start-[13] col-end-[17] row-start-1 row-end-3 mt-1
        sm:col-start-[12] sm:col-end-[18] sm:row-start-1 sm:row-end-3
        lg:hidden"
        layoutId={true}
      ></motion.div>
      <div
        className="flex justify-center items-center col-start-[13] col-end-[17] row-start-1 row-end-3 mt-1
        sm:col-start-[12] sm:col-end-[18] sm:row-start-1 sm:row-end-3
        lg:hidden"
        onClick={() => setIsopen(!isopen)}
      >
        <Svgimg src={menu} alt={"menu"} width="40" height="40" />
      </div>
      <AnimatePresence>
        {isopen ? (
          <>
            <motion.div
              layoutId={isopen}
              className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] gap-2
               bg-neutral-950 shadow-lg shadow-black col-start-2 col-end-[28] row-start-3 row-end-[21] rounded-[2px]
              sm:bg-neutral-950 sm:col-start-2 sm:col-end-[28] sm:row-start-3 sm:row-end-[19]
              lg:hidden"
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-white col-start-[11] col-end-[19] row-start-[19] row-end-[21] rounded-xl flex justify-center items-center"
                onClick={() => setIsopen(!isopen)}
              >
                <Svgimg src={close} alt={"close"} width="40" height="40" />
              </motion.button>
              <Buttonsmodalsmobil />
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Buttonmodalmobil;
