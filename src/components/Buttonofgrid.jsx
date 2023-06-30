import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import close from "../assets/close-square-svgrepo-com.svg";
import arrowup from "../assets/arrow-up-square-svgrepo-com.svg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";
import Svgimg from "./Svgimg";
import Multitask from "./Multitask";

const Buttonofgrid = ({ css, id }) => {
  const [seletid, setSeletid] = useState(null);

  return (
    <>
      <motion.div
        className={`${css.generalcss}`}
        layoutId={id}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        onClick={() => setSeletid(id)}
      >
        {css.title}
      </motion.div>
      <AnimatePresence>
        {seletid ? (
          <motion.div
            className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-2 col-end-[28] row-start-3 row-end-[21] rounded-[3px] z-0 bg-skin-layout shadow-lg shadow-black
            sm:col-start-2 sm:col-end-[28] sm:row-start-3 sm:row-end-[20]
            xl:col-start-5 xl:col-end-[23] xl:row-start-1 xl:row-end-[12] xl:my-3 xl:mx-3 xl:rounded-xl"
            layoutId={seletid}
          >
            <motion.div
              className="
             lg:rounded-xl lg:p-3
            bg-skin-layout font-mono font-light col-start-1 col-end-[29] row-start-4 row-end-[22] p-2 text-skin-inverted overflow-auto"
            >
              {css.content.map((data) => {
                return <LayoutGroup key={data.id} id={data.id}>
                 <Multitask key={data.id} data={data.data} />
                </LayoutGroup>
              })}
            </motion.div>
            <motion.div className={`${css.cssopen}`}>
              <motion.h1
                className="
                bg-skin-layout2 font-sans font-extrabold  col-start-1 col-end-[14] row-start-2 row-end-[11] flex justify-center items-center mx-1 rounded-[3px] text-skin-inverted
                lg:mx-1 lg:rounded-lg lg:col-start-1 lg:col-end-8 lg:row-start-2 lg:row-end-[11]
                xl:mx-2 xl:rounded-xl xl:col-start-1 xl:col-end-8 xl:row-start-2 xl:row-end-[11]
              "
              >
                {css.title}
              </motion.h1>
              <motion.button
                className="
                lg:col-start-[27] lg:col-end-[29] lg:row-start-2 lg:row-end-[11] lg:mx-3 lg:rounded-lg
                col-start-[24] col-end-[29] row-start-2 row-end-[11] mx-1 rounded-[3px] flex justify-center items-center
                "
                onClick={() => setSeletid(null)}
              >
                <Svgimg src={close} alt={"close"} width="40" height="40" />
              </motion.button>
              <motion.button
                className="
                lg:col-start-[25] lg:col-end-[27] lg:row-start-2 lg:row-end-[11] lg:mx-3 lg:rounded-lg
                col-start-[19] col-end-[24] row-start-2 row-end-[11] mx-1 rounded-[3px] flex justify-center items-center"
              >
                <Svgimg src={arrowup} alt={"arowup"} width="40" height="40" />
              </motion.button>
              <motion.button
                className="
                lg:col-start-[23] lg:col-end-[25] lg:row-start-2 lg:row-end-[11] lg:mx-3 lg:rounded-lg
                col-start-[14] col-end-[19] row-start-2 row-end-[11] mx-1 rounded-[3px] flex justify-center items-center"
              >
                <Svgimg
                  src={arrowdown}
                  alt={"arrowdown"}
                  width="40"
                  height="40"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Buttonofgrid;
