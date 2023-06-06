import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Glosariolista from "../components/Glosariolista";
import { Outlet } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import Glosariolistamobil from "../components/Glosariolistamobil";

const Glosario = () => {
  const [isopen, setIsopen] = useState(null);
  const abovexlscreen = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      {abovexlscreen ? (
        <motion.div
          className="
        bg-transparent grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(29,1fr)] max-xl:hidden
      xl:col-start-1 xl:col-end-[23] xl:row-start-1 xl:row-end-[12] xl:mb-3 xl:ml-3 xl:mt-3 xl:mr-3 xl:rounded-xl"
        >
          <Outlet />
          <Glosariolista />
        </motion.div>
      ) : (
        <>
          <Outlet />
          {/*  eesto renderiza <Glosariocarpetamobil/> con react router dom */}
          <motion.div
            whileTap={{ scale: 1.05 }}
            className="bg-white flex justify-center items-center col-start-2 col-end-[28] row-start-[21] row-end-[22] rounded-sm mb-1 z-0 outline
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
             bg-gray-keto shadow-lg shadow-black col-start-2 col-end-[28] row-start-1 row-end-[22] rounded-[2px] my-1 
            sm:bg-gray-keto sm:col-start-2 sm:col-end-[28] sm:row-start-1 sm:row-end-[22]
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
      )}
    </>
  );
};

export default Glosario;
