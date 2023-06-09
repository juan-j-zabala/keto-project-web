import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Svgimg from "./Svgimg";
import Navlink from "./Navlink";
import close from "../assets/close-square-svgrepo-com.svg";

const Buttonofmobil = ({ generalcss, dataimg = null, title, rutas, id }) => {
  const [seletid, setSeletid] = useState(null);

  return (
    <>
      <motion.div
        className={`${generalcss}`}
        layoutId={id}
        whileTap={{ scale: 0.7 }}
        whileFocus={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 100 }}
        onClick={() => setSeletid(id)}
      >
        <Svgimg
          src={dataimg.src}
          alt={dataimg.alt}
          width={dataimg.width}
          height={dataimg.height}
        />
        {title}
      </motion.div>
      <AnimatePresence>
        {seletid ? (
          <motion.div
            className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-2 col-end-[28] row-start-2 row-end-[21] rounded-[3px] z-0 bg-skin-layoutinverted gap-1
            xl:col-start-5 xl:col-end-[23] xl:row-start-3 xl:row-end-[12] xl:my-3 xl:mx-3 xl:rounded-xl"
            layoutId={seletid}
          >
            <motion.button
              className="flex justify-center items-center col-start-[10] col-end-[20] row-start-[19] row-end-[21] rounded-[3px]"
              onClick={() => setSeletid(null)}
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
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Buttonofmobil;
