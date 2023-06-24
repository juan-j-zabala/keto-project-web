import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Svgimg from "./Svgimg";
import back from "../assets/back-entrance-exit-logout-quit-svgrepo-com.svg";
import next from "../assets/back-entrance-black-exit-logout-quit-svgrepo-com3.svg";
import homewhite from "../assets/home-house-svgrepo-com.svg";

const Navbarcarpet = () => {
  const [open] = useContext(Context);
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      className={`grid bg-skin-layoutcarpet col-start-[29] row-start-1 row-end-[19] shadow-sm shadow-black ${
        open === false
          ? "rounded-l-xl row-end-[22] "
          : "rounded-l-sm mb-4 ml-[1px] mr-[4px] "
      } rounded-e-xl max-xl:hidden overflow-auto`}
    >
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="bg-skin-layout2 m-[2px] rounded-xl text-white [writing-mode:vertical-lr] [text-orientation:upright] flex justify-center items-center "
      >
        <div className="bg-skin-layoutinverted rounded-xl h-2/4 flex justify-center cursor-pointer">
          <Svgimg src={back} alt={"back"} width="30" height="30" />
        </div>
      </div>
      <Link
        to={"/"}
        className="bg-skin-layout2 m-[2px] rounded-xl text-white [writing-mode:vertical-lr] [text-orientation:upright] flex justify-center items-center "
      >
        <div className="bg-skin-layoutinverted rounded-xl h-2/4 flex justify-center cursor-pointer">
          <Svgimg src={homewhite} alt={"homewhite"} width="30" height="30" />
        </div>
      </Link>
      <div
        onClick={() => {
          navigate(1);
        }}
        className="bg-skin-layout2 m-[2px] rounded-xl text-white [writing-mode:vertical-lr] [text-orientation:upright] flex justify-center items-center "
      >
        <div className="bg-skin-layoutinverted rounded-xl h-2/4 flex justify-center cursor-pointer">
          <Svgimg src={next} alt={"next"} width="30" height="30" />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbarcarpet;
