import { motion } from "framer-motion";
import { useState } from "react";
import Svgimg from "../components/Svgimg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";

const Glosariocarpet = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-green-600 xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black ${
          open === "green" ||
          open === "pink" ||
          open === "rose" ||
          open === "purple" ||
          open === "red" ||
          open === "blue"
            ? "xl:col-end-[29]"
            : "xl:col-end-[12]"
        }`}
      >
        <div className="bg-green-600 relative left-10 top-[509px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-green-600 w-10 h-[102px] z-0"></div>
          <div className="bg-green-600 w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
            <motion.p
              className={`cursor-pointer ${open === "green" ? "hidden" : ""} `}
              animate={{ rotate: open === "green" ? 90 : 270 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("green")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "green" ? "" : "hidden"}`}
              animate={{ rotate: open === "green" ? 90 : 270 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
          </div>
        </div>
        <div
          className={`bg-green-600 w-3/4 h-[79%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "green" ? "" : "hidden"
          }`}
        >
          {data.hoja1.title}
          {data.hoja1.text}
        </div>
      </motion.div>

      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-pink-600 xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black ${
          open === "pink" ||
          open === "rose" ||
          open === "purple" ||
          open === "red" ||
          open === "blue"
            ? "xl:col-end-[28]"
            : "xl:col-end-[11]"
        }`}
      >
        <div className="bg-pink-600 relative left-10 top-[408px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-pink-600 w-10 h-[102px] z-0"></div>
          <div className="bg-pink-600 w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
            <motion.p
              className={`cursor-pointer ${open === "pink" ? "hidden" : ""} `}
              animate={{ rotate: open === "pink" ? 90 : 270 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("pink")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "pink" ? "" : "hidden"}`}
              animate={{ rotate: open === "pink" ? 90 : 270 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
          </div>
        </div>
        <div
          className={`bg-pink-600 w-3/4 h-[79%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "pink" ? "" : "hidden"
          }`}
        >
          {data.hoja2.title}
          {data.hoja2.text}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-rose-600 xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black ${
          open === "rose" ||
          open === "purple" ||
          open === "red" ||
          open === "blue"
            ? "xl:col-end-[27]"
            : "xl:col-end-[10]"
        }`}
      >
        <div className="bg-rose-600 relative left-10 top-[306px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-rose-600 w-10 h-[102px] z-0"></div>
          <div className="bg-rose-600 w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
            <motion.p
              className={`cursor-pointer ${open === "rose" ? "hidden" : ""}`}
              animate={{ rotate: open === "rose" ? 90 : 270 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("rose")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "rose" ? "" : "hidden"}`}
              animate={{ rotate: open === "rose" ? 90 : 270 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
          </div>
        </div>
        <div
          className={`bg-rose-600 w-3/4 h-[83%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "rose" ? "" : "hidden"
          }`}
        >
          {data.hoja3.title}
          {data.hoja3.text}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-purple-600 xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black ${
          open === "purple" || open === "red" || open === "blue"
            ? "xl:col-end-[26]"
            : "xl:col-end-[9]"
        }`}
      >
        <div className="bg-purple-600 relative left-10 top-[204px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-purple-600 w-10 h-[102px] z-0"></div>
          <div className="bg-purple-600 w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
            <motion.p
              className={`cursor-pointer ${open === "purple" ? "hidden" : ""}`}
              animate={{ rotate: open === "purple" ? 90 : 270 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("purple")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "purple" ? "" : "hidden"}`}
              animate={{ rotate: open === "purple" ? 90 : 270 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
          </div>
        </div>
        <div
          className={`bg-purple-600 w-3/4 h-[83%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "purple" ? "" : "hidden"
          }`}
        >
          {data.hoja4.title}
          {data.hoja4.text}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-red-600 xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black ${
          open === "red" || open === "blue"
            ? "xl:col-end-[25]"
            : "xl:col-end-[8]"
        }`}
      >
        <div className="bg-red-600 relative left-10 top-[102px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-red-600 w-10 h-[102px] z-0"></div>
          <div className="bg-red-600 w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
            <motion.p
              className={`cursor-pointer ${open === "red" ? "hidden" : ""}`}
              animate={{ rotate: open === "red" ? 90 : 270 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("red")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "red" ? "" : "hidden"}`}
              animate={{ rotate: open === "red" ? 90 : 270 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
          </div>
        </div>
        <div
          className={`bg-red-600 w-3/4 h-[83%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "red" ? "" : "hidden"
          }`}
        >
          {data.hoja5.title}
          {data.hoja5.text}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-blue-600 xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black ${
          open === "blue" ? "xl:col-end-[24]" : "xl:col-end-[7]"
        }`}
      >
        <div className="bg-blue-600 relative left-10 h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-blue-600 w-10 h-[102px] z-0"></div>
          <div className="bg-blue-600 w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
            {" "}
            <motion.p
              className={`cursor-pointer ${open === "blue" ? "hidden" : ""}`}
              animate={{ rotate: open === "blue" ? 90 : 270 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("blue")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "blue" ? "" : "hidden"}`}
              animate={{ rotate: open === "blue" ? 90 : 270 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="40"
                width="40"
              />
            </motion.p>
          </div>
        </div>
        <div
          className={`bg-blue-600 w-3/4 h-[83%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "blue" ? "" : "hidden"
          }`}
        >
          {data.hoja6.title}
          {data.hoja6.text}
        </div>
      </motion.div>
    </>
  );
};

export default Glosariocarpet;
