import { motion } from "framer-motion";
import { useState } from "react";
import Svgimg from "../components/Svgimg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";

const Glosariocarpet = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          aspernatur cumque quibusdam quia maiores aut id aperiam eligendi
          blanditiis laboriosam, voluptatum ut vel inventore rem? Explicabo,
          pariatur in labore harum repellendus porro est exercitationem ea, vel
          odit vitae animi sapiente error! Culpa incidunt aperiam aspernatur,
          corporis ab tenetur sequi magnam exercitationem maxime, sint ad quo
          molestiae provident saepe, et iusto quaerat natus necessitatibus.
          Atque cum veniam quaerat facere error! Voluptatibus nulla nobis optio
          atque eaque excepturi aspernatur molestiae repellat sunt? Iste itaque,
          id animi ex eaque tempore veritatis! Ipsam qui quae tenetur id
          suscipit nisi blanditiis error vitae quisquam enim.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          aspernatur cumque quibusdam quia maiores aut id aperiam eligendi
          blanditiis laboriosam, voluptatum ut vel inventore rem? Explicabo,
          pariatur in labore harum repellendus porro est exercitationem ea, vel
          odit vitae animi sapiente error! Culpa incidunt aperiam aspernatur,
          corporis ab tenetur sequi magnam exercitationem maxime, sint ad quo
          molestiae provident saepe, et iusto quaerat natus necessitatibus.
          Atque cum veniam quaerat facere error! Voluptatibus nulla nobis optio
          atque eaque excepturi aspernatur molestiae repellat sunt? Iste itaque,
          id animi ex eaque tempore veritatis! Ipsam qui quae tenetur id
          suscipit nisi blanditiis error vitae quisquam enim.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          aspernatur cumque quibusdam quia maiores aut id aperiam eligendi
          blanditiis laboriosam, voluptatum ut vel inventore rem? Explicabo,
          pariatur in labore harum repellendus porro est exercitationem ea, vel
          odit vitae animi sapiente error! Culpa incidunt aperiam aspernatur,
          corporis ab tenetur sequi magnam exercitationem maxime, sint ad quo
          molestiae provident saepe, et iusto quaerat natus necessitatibus.
          Atque cum veniam quaerat facere error! Voluptatibus nulla nobis optio
          atque eaque excepturi aspernatur molestiae repellat sunt? Iste itaque,
          id animi ex eaque tempore veritatis! Ipsam qui quae tenetur id
          suscipit nisi blanditiis error vitae quisquam enim.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          aspernatur cumque quibusdam quia maiores aut id aperiam eligendi
          blanditiis laboriosam, voluptatum ut vel inventore rem? Explicabo,
          pariatur in labore harum repellendus porro est exercitationem ea, vel
          odit vitae animi sapiente error! Culpa incidunt aperiam aspernatur,
          corporis ab tenetur sequi magnam exercitationem maxime, sint ad quo
          molestiae provident saepe, et iusto quaerat natus necessitatibus.
          Atque cum veniam quaerat facere error! Voluptatibus nulla nobis optio
          atque eaque excepturi aspernatur molestiae repellat sunt? Iste itaque,
          id animi ex eaque tempore veritatis! Ipsam qui quae tenetur id
          suscipit nisi blanditiis error vitae quisquam enim.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          aspernatur cumque quibusdam quia maiores aut id aperiam eligendi
          blanditiis laboriosam, voluptatum ut vel inventore rem? Explicabo,
          pariatur in labore harum repellendus porro est exercitationem ea, vel
          odit vitae animi sapiente error! Culpa incidunt aperiam aspernatur,
          corporis ab tenetur sequi magnam exercitationem maxime, sint ad quo
          molestiae provident saepe, et iusto quaerat natus necessitatibus.
          Atque cum veniam quaerat facere error! Voluptatibus nulla nobis optio
          atque eaque excepturi aspernatur molestiae repellat sunt? Iste itaque,
          id animi ex eaque tempore veritatis! Ipsam qui quae tenetur id
          suscipit nisi blanditiis error vitae quisquam enim.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          aspernatur cumque quibusdam quia maiores aut id aperiam eligendi
          blanditiis laboriosam, voluptatum ut vel inventore rem? Explicabo,
          pariatur in labore harum repellendus porro est exercitationem ea, vel
          odit vitae animi sapiente error! Culpa incidunt aperiam aspernatur,
          corporis ab tenetur sequi magnam exercitationem maxime, sint ad quo
          molestiae provident saepe, et iusto quaerat natus necessitatibus.
          Atque cum veniam quaerat facere error! Voluptatibus nulla nobis optio
          atque eaque excepturi aspernatur molestiae repellat sunt? Iste itaque,
          id animi ex eaque tempore veritatis! Ipsam qui quae tenetur id
          suscipit nisi blanditiis error vitae quisquam enim.
        </div>
      </motion.div>
    </>
  );
};

export default Glosariocarpet;
