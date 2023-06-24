import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import back from "../assets/back-entrance-exit-logout-quit-svgrepo-com.svg";
import next from "../assets/back-entrance-black-exit-logout-quit-svgrepo-com3.svg";
import homewhite from "../assets/home-house-svgrepo-com.svg";
import Svgimg from "./Svgimg";

const Navbarcarpetmobil = () => {
  const [open] = useContext(Context);
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      className={`flex justify-evenly items-center bg-skin-layoutcarpet col-start-2 rounded-sm mt-[1px] mb-[-5px] row-start-1 row-end-2 xl:hidden ${
        open === false ? "col-end-[28]" : "col-end-[24] mr-[3%]"
      } `}
    >
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="bg-skin-layout2 w-[30%] rounded-sm h-[85%] flex justify-center items-center text-white "
      >
        <div className="bg-skin-layoutinverted rounded-sm w-[30%] flex justify-center cursor-pointer">
          <Svgimg src={back} alt={"back"} width="15" height="15" />
        </div>
      </div>
      <Link
        to={"/"}
        className="bg-skin-layout2 w-[30%] rounded-sm h-[85%] flex justify-center items-center text-white "
      >
        <div className="bg-skin-layoutinverted rounded-sm w-[30%] flex justify-center cursor-pointer">
          <Svgimg src={homewhite} alt={"homewhite"} width="15" height="15" />
        </div>
      </Link>
      <div
        onClick={() => {
          navigate(1);
        }}
        className="bg-skin-layout2 w-[30%] rounded-sm h-[85%] flex justify-center items-center text-white "
      >
        <div className="bg-skin-layoutinverted rounded-sm w-[30%] flex justify-center cursor-pointer">
          <Svgimg src={next} alt={"next"} width="15" height="15" />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbarcarpetmobil;
