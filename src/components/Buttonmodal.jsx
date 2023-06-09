import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Svgimg from "./Svgimg";
import Navlink from "./Navlink";
import close from "../assets/close-square-svgrepo-com.svg";

const Buttonmodal = ({
  title,
  generalcss,
  modalopencss,
  dataimg = null,
  rutas,
  hidden = "",
}) => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <motion.div
        className={`${generalcss}  ${hidden}`}
        layoutId={true}
      ></motion.div>
      <div
        className={`${generalcss} ${hidden}`}
        onClick={() => setIsopen(!isopen)}
      >
        <Svgimg
          src={dataimg.src}
          alt={dataimg.alt}
          width={dataimg.width}
          height={dataimg.height}
        />
        <motion.h1 whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          {title}
        </motion.h1>
      </div>
      <AnimatePresence>
        {isopen ? (
          <>
            <motion.div
              layoutId={isopen}
              className={`${modalopencss}`}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-skin-layoutinverted text-skin-base rounded-xl col-start-[8] col-end-[22] row-start-[19] row-end-[21] flex justify-center items-center"
                onClick={() => setIsopen(!isopen)}
              >
                <Svgimg src={close} alt={"close"} width="40" height="40" />
              </motion.button>
              {rutas.map((data) => {
                return (
                  <Navlink
                    css={data.css}
                    key={data.id}
                    ruta={data.ruta}
                    title={data.title}
                  />
                );
              })}
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Buttonmodal;
