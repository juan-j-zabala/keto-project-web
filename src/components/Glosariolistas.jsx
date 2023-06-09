import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Svgimg from "../components/Svgimg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";
import { Context } from "../context/ContextProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Glosariolistas = ({ data }) => {
  const [, setOpen] = useContext(Context); // quitar esa coma al lado del setOpen hace que esto no funcione lol
  const [selectedId, setSelectedId] = useState(false); // este estado abre los botones en una lista
  const navigate = useNavigate();
  const currentRout = useLocation();

  const Handleclick = () => {
    currentRout.pathname === data.url1 ? null : navigate(data.url1);
  };

  return (
    <>
      <motion.div
        className={`bg-skin-layoutinverted grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-1 col-end-[29] mx-1 my-1 rounded-xl overflow-hidden ${
          selectedId ? data.listaopen : data.listaclose
        }`}
        layout
        style={{ borderRadius: "12px" }}
      >
        <motion.div
          className={`bg-skin-layoutinverted grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-1 col-end-[29] row-start-1 rounded-xl  ${
            selectedId ? "row-end-4 mb-3" : "row-end-[23]"
          }`}
          layout
          style={{ borderRadius: "12px" }}
        >
          <motion.div
            layout
            className="bg-skin-layout2 col-start-1 col-end-[18] row-start-1 row-end-[23] rounded-xl m-1 flex justify-center items-center"
            //   onClick={() => setSelectedId("row-end-[11]")}
          >
            <p>{data.lista}</p>
          </motion.div>
          <motion.div
            layout
            className="bg-skin-layoutinverted col-start-[18] col-end-[29] row-start-1 row-end-[23] rounded-xl m-1 flex justify-center items-center text-skin-base"
            onClick={() => setSelectedId(!selectedId)}
          >
            <motion.p
              className="cursor-pointer"
              animate={{ rotate: selectedId ? 180 : 0 }}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
          </motion.div>
        </motion.div>
        <button
          onClick={() => {
            setOpen("green"), Handleclick();
          }}
          className={`z-0 bg-skin-layout2 col-start-1 col-end-[29] row-start-4 row-end-7 m-1 rounded-xl flex justify-center items-center text-skin-inverted ${
            selectedId ? "" : "hidden"
          }`}
        >
          {" "}
          mobil{data.palabra1}
        </button>
        <button
          onClick={() => {
            setOpen("pink"), Handleclick();
          }}
          className={`z-0 bg-skin-layout2 col-start-1 col-end-[29] row-start-7 row-end-[10] m-1 rounded-xl flex justify-center items-center text-skin-inverted ${
            selectedId ? "" : "hidden"
          }`}
        >
          {" "}
          mobil{data.palabra2}
        </button>
        <button
          onClick={() => {
            setOpen("rose"), Handleclick();
          }}
          className={`z-0 bg-skin-layout2 col-start-1 col-end-[29] row-start-[10] row-end-[13] m-1 rounded-xl flex justify-center items-center text-skin-inverted ${
            selectedId ? "" : "hidden"
          }`}
        >
          {" "}
          mobil{data.palabra3}
        </button>
        <button
          onClick={() => {
            setOpen("purple"), Handleclick();
          }}
          className={`z-0 bg-skin-layout2 col-start-1 col-end-[29] row-start-[13] row-end-[16] m-1 rounded-xl flex justify-center items-center text-skin-inverted ${
            selectedId ? "" : "hidden"
          }`}
        >
          {" "}
          mobil{data.palabra4}
        </button>
        <button
          onClick={() => {
            setOpen("red"), Handleclick();
          }}
          className={`z-0 bg-skin-layout2 col-start-1 col-end-[29] row-start-[16] row-end-[19] m-1 rounded-xl flex justify-center items-center text-skin-inverted ${
            selectedId ? "" : "hidden"
          }`}
        >
          {" "}
          mobil{data.palabra5}
        </button>
        <button
          onClick={() => {
            setOpen("blue"), Handleclick();
          }}
          className={`z-0 bg-skin-layout2 col-start-1 col-end-[29] row-start-[19] row-end-[22] m-1 rounded-xl flex justify-center items-center text-skin-inverted ${
            selectedId ? "" : "hidden"
          }`}
        >
          {" "}
          mobil{data.palabra6}
        </button>
      </motion.div>
    </>
  );
};

export default Glosariolistas;
