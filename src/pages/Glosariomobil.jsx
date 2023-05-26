import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState } from "react";
import Glosariolistamobil from "../components/Glosariolistamobil";
import Glosariocarpetamobil from "../components/Glosariocarpetamobil";
import { Outlet } from "react-router-dom";

const Glosariomobil = () => {
  const [isopen, setIsopen] = useState(null)

  return (
    <>
      <Outlet/>
      {/* <Glosariocarpetamobil /> */}
      <motion.div
        whileTap={{ scale: 1.05 }}
        className="bg-white flex justify-center items-center col-start-2 col-end-[28] row-start-[21] row-end-[22] rounded-sm mb-1 z-0
        sm:col-start-2 sm:col-end-[28] sm:row-start-[20] sm:row-end-[22] sm:mt-3
      xl:hidden"
        layoutId={"open"}
        onClick={() => setIsopen("open")}
      >
        <motion.div
          animate={{ scaleX: [0.4, 1.2, 0.4] }}
          transition={{ duration: 2, ease: easeInOut, repeat: Infinity }}
          className="bg-black w-60 h-1 rounded-sm"
        ></motion.div>
      </motion.div>
      <AnimatePresence>
        {isopen ? (
          <>
            <motion.div
              layoutId={isopen}
              className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] gap-2 z-0
             bg-black-keto shadow-lg shadow-black col-start-2 col-end-[28] row-start-1 row-end-[22] rounded-[2px] my-1 
            sm:bg-neutral-950 sm:col-start-2 sm:col-end-[28] sm:row-start-1 sm:row-end-[22]
            xl:hidden"
            >
              <motion.button
                whileTap={{ scale: 1.05 }}
                className="bg-white col-start-[1] col-end-[29] row-start-[21] row-end-[22] rounded-sm flex justify-center items-center
                sm:row-start-[20] sm:mt-3"
                onClick={() => setIsopen(null)}
              >
                <motion.div
                  animate={{ scaleX: [0.4, 1.2, 0.4] }}
                  transition={{
                    duration: 2,
                    ease: easeInOut,
                    repeat: Infinity,
                  }}
                  className="bg-black w-60 h-1 rounded-sm"
                ></motion.div>
              </motion.button>
              <Glosariolistamobil />
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Glosariomobil;
