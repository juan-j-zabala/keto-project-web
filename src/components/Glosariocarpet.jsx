import { motion } from "framer-motion";
import { useContext } from "react";
import Svgimg from "../components/Svgimg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";
import Multitask from "./Multitask";
import { Context } from "../context/ContextProvider";

const Glosariocarpet = ({ data }) => {
  const [open , setOpen] = useContext(Context)
  // const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black max-xl:hidden ${
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
        <div className="bg-skin-layoutcarpet relative left-10 top-[509px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-skin-layoutcarpet w-10 h-[102px] z-0"></div>
          <div className="bg-skin-layoutcarpet w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
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
          className={`bg-skin-layoutcarpet font-mono text-sm text-skin-base w-3/4 h-[79%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "green" ? "" : "hidden"
          }`}
        >
          {data.hoja1.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
        </div>
      </motion.div>

      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black max-xl:hidden ${
          open === "pink" ||
          open === "rose" ||
          open === "purple" ||
          open === "red" ||
          open === "blue"
            ? "xl:col-end-[28]"
            : "xl:col-end-[11]"
        }`}
      >
        <div className="bg-skin-layoutcarpet relative left-10 top-[408px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-skin-layoutcarpet w-10 h-[102px] z-0"></div>
          <div className="bg-skin-layoutcarpet w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
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
          className={`bg-skin-layoutcarpet font-mono text-sm text-skin-base w-3/4 h-[79%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "pink" ? "" : "hidden"
          }`}
        >
          {data.hoja2.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black max-xl:hidden ${
          open === "rose" ||
          open === "purple" ||
          open === "red" ||
          open === "blue"
            ? "xl:col-end-[27]"
            : "xl:col-end-[10]"
        }`}
      >
        <div className="bg-skin-layoutcarpet relative left-10 top-[306px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-skin-layoutcarpet w-10 h-[102px] z-0"></div>
          <div className="bg-skin-layoutcarpet w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
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
          className={`bg-skin-layoutcarpet font-mono text-sm text-skin-base w-3/4 h-[83%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "rose" ? "" : "hidden"
          }`}
        >
          {data.hoja3.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black max-xl:hidden ${
          open === "purple" || open === "red" || open === "blue"
            ? "xl:col-end-[26]"
            : "xl:col-end-[9]"
        }`}
      >
        <div className="bg-skin-layoutcarpet relative left-10 top-[204px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-skin-layoutcarpet w-10 h-[102px] z-0"></div>
          <div className="bg-skin-layoutcarpet w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
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
          className={`bg-skin-layoutcarpet font-mono text-sm text-skin-base w-3/4 h-[83%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "purple" ? "" : "hidden"
          }`}
        >
          {data.hoja4.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black max-xl:hidden ${
          open === "red" || open === "blue"
            ? "xl:col-end-[25]"
            : "xl:col-end-[8]"
        }`}
      >
        <div className="bg-skin-layoutcarpet relative left-10 top-[102px] h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-skin-layoutcarpet w-10 h-[102px] z-0"></div>
          <div className="bg-skin-layoutcarpet w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
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
          className={`bg-skin-layoutcarpet font-mono text-sm text-skin-base w-3/4 h-[83%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "red" ? "" : "hidden"
          }`}
        >
          {data.hoja5.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet xl:col-start-2  xl:row-start-1 xl:row-end-[22] xl:rounded-r-sm xl:rounded-l-xl z-0 shadow-lg shadow-black max-xl:hidden ${
          open === "blue" ? "xl:col-end-[24]" : "xl:col-end-[7]"
        }`}
      >
        <div className="bg-skin-layoutcarpet relative left-10 h-[102px] rounded-xl flex justify-end items-center">
          <div className="bg-skin-layoutcarpet w-10 h-[102px] z-0"></div>
          <div className="bg-skin-layoutcarpet w-10 h-[102px] rounded-r-xl shadow-lg shadow-black flex justify-center items-center">
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
          className={`bg-skin-layoutcarpet font-mono text-sm text-skin-base w-3/4 h-[83%] ml-[25%] relative bottom-9 pl-36 pr-6 overflow-auto ${
            open === "blue" ? "" : "hidden"
          }`}
        >
          {data.hoja6.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Glosariocarpet;
