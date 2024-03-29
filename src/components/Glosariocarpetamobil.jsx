import { motion } from "framer-motion";
import { useContext } from "react";
import Svgimg from "../components/Svgimg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";
import Multitask from "./Multitask";
import { Context } from "../context/ContextProvider";
import Navbarcarpetmobil from "./Navbarcarpetmobil";

const Glosariocarpetamobil = ({ data }) => {
  const [open , setOpen] = useContext(Context)

  return (
    <>
    <Navbarcarpetmobil/>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-3xl shadow-black xl:hidden
         ${
           open === "green" ||
           open === "pink" ||
           open === "rose" ||
           open === "purple" ||
           open === "red" ||
           open === "blue"
             ? "row-start-2"
             : "row-start-[15]"
         }`}
      >
        <div className={`bg-skin-layoutcarpet relative ${open === false ? "bottom-6" : "bottom-[5%]" } left-[82.3%] w-[16.2%] rounded-md flex-col`}>
          <div className="bg-skin-layoutcarpet rounded-t-sm shadow-3xl shadow-black flex justify-center">
            <motion.p
              className={`cursor-pointer ${open === "green" ? "hidden" : ""} `}
              animate={{ rotate: open === "green" ? 0 : 180 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("green")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "green" ? "" : "hidden"}`}
              animate={{ rotate: open === "green" ? 0 : 180 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
          </div>
          <div className="bg-skin-layoutcarpet h-5 z-0"></div>
        </div>
        <div
          className={`bg-skin-layoutcarpet h-[91%] relative bottom-9 p-3 overflow-auto text-skin-base scrollbar-none ${
            open === "green" ? "" : "hidden"
          }`}
        >
          {data.hoja1.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
          {data.hoja1.text}
        </div>
      </motion.div>

      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-3xl shadow-black xl:hidden 
         ${
           open === "pink" ||
           open === "rose" ||
           open === "purple" ||
           open === "red" ||
           open === "blue"
             ? "row-start-2 mt-[26px]"
             : "row-start-[16]"
         }`}
      >
        <div className="bg-skin-layoutcarpet relative bottom-6 left-[65.8%] w-[16.2%] rounded-md flex-col">
          <div className="bg-skin-layoutcarpet rounded-t-sm shadow-3xl shadow-black flex justify-center">
            <motion.p
              className={`cursor-pointer ${open === "pink" ? "hidden" : ""} `}
              animate={{ rotate: open === "pink" ? 0 : 180 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("pink")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "pink" ? "" : "hidden"}`}
              animate={{ rotate: open === "pink" ? 0 : 180 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
          </div>
          <div className="bg-skin-layoutcarpet h-5 z-0"></div>
        </div>
        <div
          className={`bg-skin-layoutcarpet h-[91%] relative bottom-9 p-3 overflow-auto text-skin-base scrollbar-none ${
            open === "pink" ? "" : "hidden"
          }`}
        >
          {data.hoja2.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
          {data.hoja2.text}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-3xl shadow-black xl:hidden 
         ${
           open === "rose" ||
           open === "purple" ||
           open === "red" ||
           open === "blue"
             ? "row-start-3 mt-[26px]"
             : "row-start-[17]"
         }`}
      >
        <div className="bg-skin-layoutcarpet relative bottom-6 left-[49.3%] w-[16.2%] rounded-md flex-col">
          <div className="bg-skin-layoutcarpet rounded-t-sm shadow-3xl shadow-black flex justify-center">
            <motion.p
              className={`cursor-pointer ${open === "rose" ? "hidden" : ""}`}
              animate={{ rotate: open === "rose" ? 0 : 180 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("rose")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "rose" ? "" : "hidden"}`}
              animate={{ rotate: open === "rose" ? 0 : 180 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
          </div>
          <div className="bg-skin-layoutcarpet h-5 z-0"></div>
        </div>
        <div
          className={`bg-skin-layoutcarpet h-[91%] relative bottom-9 p-3 overflow-auto text-skin-base scrollbar-none ${
            open === "rose" ? "" : "hidden"
          }`}
        >
          {data.hoja3.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
          {data.hoja3.text}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-3xl shadow-black xl:hidden 
         ${
           open === "purple" || open === "red" || open === "blue"
             ? "row-start-4 mt-[26px]"
             : "row-start-[18]"
         }`}
      >
        <div className="bg-skin-layoutcarpet relative bottom-6 left-[32.8%] w-[16.2%] rounded-md flex-col">
          <div className="bg-skin-layoutcarpet rounded-t-sm shadow-3xl shadow-black flex justify-center">
            <motion.p
              className={`cursor-pointer ${open === "purple" ? "hidden" : ""}`}
              animate={{ rotate: open === "purple" ? 0 : 180 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("purple")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "purple" ? "" : "hidden"}`}
              animate={{ rotate: open === "purple" ? 0 : 180 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
          </div>
          <div className="bg-skin-layoutcarpet h-5 z-0"></div>
        </div>
        <div
          className={`bg-skin-layoutcarpet h-[91%] relative bottom-9 p-3 overflow-auto text-skin-base scrollbar-none ${
            open === "purple" ? "" : "hidden"
          }`}
        >
          {data.hoja4.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
          {data.hoja4.text}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-3xl shadow-black xl:hidden 
         ${
           open === "red" || open === "blue" ? "row-start-5 mt-[26px]" : "row-start-[19]"
         }`}
      >
        <div className="bg-skin-layoutcarpet relative bottom-6 left-[16.4%] w-[16.2%] rounded-md flex-col">
          <div className="bg-skin-layoutcarpet rounded-t-sm shadow-3xl shadow-black flex justify-center">
            <motion.p
              className={`cursor-pointer ${open === "red" ? "hidden" : ""}`}
              animate={{ rotate: open === "red" ? 0 : 180 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("red")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "red" ? "" : "hidden"}`}
              animate={{ rotate: open === "red" ? 0 : 180 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
          </div>
          <div className="bg-skin-layoutcarpet h-5 z-0"></div>
        </div>
        <div
          className={`bg-skin-layoutcarpet h-[91%] relative bottom-9 p-3 overflow-auto text-skin-base scrollbar-none ${
            open === "red" ? "" : "hidden"
          }`}
        >
          {data.hoja5.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
          {data.hoja5.text}
        </div>
      </motion.div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-skin-layoutcarpet col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-3xl shadow-black xl:hidden 
         ${open === "blue" ? "row-start-6 mt-[26px]" : "row-start-[20]"}`}
      >
        <div className="bg-skin-layoutcarpet relative bottom-6 w-[16.2%] rounded-sm flex-col">
          <div className="bg-skin-layoutcarpet rounded-t-sm shadow-3xl shadow-black flex justify-center">
            <motion.p
              className={`cursor-pointer ${open === "blue" ? "hidden" : ""}`}
              animate={{ rotate: open === "blue" ? 0 : 180 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen("blue")}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
            <motion.p
              className={`cursor-pointer ${open === "blue" ? "" : "hidden"}`}
              animate={{ rotate: open === "blue" ? 0 : 180 }}
              onClick={() => setOpen(false)}
            >
              <Svgimg
                src={arrowdown}
                alt={"arrowdown"}
                height="32"
                width="32"
              />
            </motion.p>
          </div>
          <div className="bg-skin-layoutcarpet h-3 z-0"></div>
        </div>
        <div
          className={`bg-skin-layoutcarpet h-[91%] relative bottom-9 p-3 overflow-auto text-skin-base scrollbar-none ${
            open === "blue" ? "" : "hidden"
          }`}
        >
          {data.hoja6.content.map((data) => {
            return <Multitask key={data.id} data={data.data}/>
          })}
          {data.hoja6.text}
        </div>
      </motion.div>
    </>
  );
};

export default Glosariocarpetamobil;
