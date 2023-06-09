import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import { AnimatePresence, motion } from "framer-motion";
import Svgimg from "./Svgimg";
import close from "../assets/close-square-svgrepo-com.svg";

const Multitask = ({ data }) => {
  const navigate = useNavigate();
  const [, setOpen] = useContext(Context);

  const [modalimg, setModalimg] = useState(null); // esto para el modal de imagenes con framer motion

  return (
    <>
      {data.title ? (
        <h1 className={`text-skin-base ${data.css}`}>{data.title}</h1>
      ) : data.text ? (
        <>{data.text}</>
      ) : data.img ? (
        <>
          <motion.div layoutId="1" className={`${data.css}`}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              onClick={() => setModalimg("1")}
              className={`${data.imgcss}`}
              src={data.img}
              alt={data.alt}
              width={data.width}
              height={data.height}
            />
          </motion.div>
          <AnimatePresence>
            {modalimg ? (
              <motion.div
                className="absolute flex justify-center items-center bottom-0 right-0 bg-skin-layout2 w-full h-full bg-opacity-95"
                layoutId={modalimg}
              >
                <img
                  className="rounded-xl"
                  src={data.img}
                  alt={data.alt}
                  // width=""
                  // height=""
                />
                <button
                  onClick={() => setModalimg(null)}
                  className="bg-skin-layoutinverted rounded-lg absolute lg:right-3 lg:top-3
                  max-lg:bottom-3"
                >
                  <Svgimg src={close} alt={"close"} width="40" height="40" />
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </>
      ) : data.url ? (
        <button
          onClick={() => {
            setOpen(data.hojacarpet), navigate(data.url);
          }}
          className={`text-skin-base ${data.css}`}
        >
          {data.urltext}
        </button>
      ) : data.br ? (
        <br />
      ) : null}
    </>
  );
};

export default Multitask;
