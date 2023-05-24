import { motion } from "framer-motion";
import { useState } from "react";
import Svgimg from "../components/Svgimg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";

const Glosariocarpetamobil = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className={`bg-green-600 col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-lg shadow-black xl:hidden 
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
        <div className="bg-green-600 relative bottom-6 left-60 w-12 rounded-md flex-col">
          <div className="bg-green-600 rounded-t-sm shadow-lg shadow-black flex justify-center">
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
          <div className="bg-green-600 h-5 z-0"></div>
        </div>
        <div
          className={`bg-green-600 h-[91%] relative bottom-9 p-3 overflow-auto ${
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
        className={`bg-pink-600 col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-lg shadow-black xl:hidden 
         ${
          open === "pink" ||
          open === "rose" ||
          open === "purple" ||
          open === "red" ||
          open === "blue"
            ? "row-start-3"
            : "row-start-[16]"
        }`}
      >
        <div className="bg-pink-600 relative bottom-6 left-48 w-12 rounded-md flex-col">
          <div className="bg-pink-600 rounded-t-sm shadow-lg shadow-black flex justify-center">
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
          <div className="bg-pink-600 h-5 z-0"></div>
        </div>
        <div
          className={`bg-pink-600 h-[91%] relative bottom-9 p-3 overflow-auto ${
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
        className={`bg-rose-600 col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-lg shadow-black xl:hidden 
         ${
          open === "rose" ||
          open === "purple" ||
          open === "red" ||
          open === "blue"
            ? "row-start-4"
            : "row-start-[17]"
        }`}
      >
        <div className="bg-rose-600 relative bottom-6 left-36 w-12 rounded-md flex-col">
          <div className="bg-rose-600 rounded-t-sm shadow-lg shadow-black flex justify-center">
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
          <div className="bg-rose-600 h-5 z-0"></div>
        </div>
        <div
          className={`bg-rose-600 h-[91%] relative bottom-9 p-3 overflow-auto ${
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
        className={`bg-purple-600 col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-lg shadow-black xl:hidden 
         ${
          open === "purple" || open === "red" || open === "blue"
            ? "row-start-5"
            : "row-start-[18]"
        }`}
      >
        <div className="bg-purple-600 relative bottom-6 left-24 w-12 rounded-md flex-col">
          <div className="bg-purple-600 rounded-t-sm shadow-lg shadow-black flex justify-center">
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
          <div className="bg-purple-600 h-5 z-0"></div>
        </div>
        <div
          className={`bg-purple-600 h-[91%] relative bottom-9 p-3 overflow-auto ${
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
        className={`bg-red-600 col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-lg shadow-black xl:hidden 
         ${
          open === "red" || open === "blue" ? "row-start-6" : "row-start-[19]"
        }`}
      >
        <div className="bg-red-600 relative bottom-6 left-12 w-12 rounded-md flex-col">
          <div className="bg-red-600 rounded-t-sm shadow-lg shadow-black flex justify-center">
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
          <div className="bg-red-600 h-5 z-0"></div>
        </div>
        <div
          className={`bg-red-600 h-[91%] relative bottom-9 p-3 overflow-auto ${
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
        className={`bg-blue-600 col-start-2 col-end-[28] row-end-[22] mb-1 rounded-sm z-0 shadow-lg shadow-black xl:hidden 
         ${
          open === "blue" ? "row-start-7" : "row-start-[20]"
        }`}
      >
        <div className="bg-blue-600 relative bottom-6 w-12 rounded-sm flex-col">
          <div className="bg-blue-600 rounded-t-sm shadow-lg shadow-black flex justify-center">
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
          <div className="bg-blue-600 h-3 z-0"></div>
        </div>
        <div
          className={`bg-blue-600 h-[91%] relative bottom-9 p-3 overflow-auto ${
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
          suscipit nisi blanditiis error vitae quisquam enim. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Eius, aspernatur cumque
          quibusdam quia maiores aut id aperiam eligendi blanditiis laboriosam,
          voluptatum ut vel inventore rem? Explicabo, pariatur in labore harum
          repellendus porro est exercitationem ea, vel odit vitae animi sapiente
          error! Culpa incidunt aperiam aspernatur, corporis ab tenetur sequi
          magnam exercitationem maxime, sint ad quo molestiae provident saepe,
          et iusto quaerat natus necessitatibus. Atque cum veniam quaerat facere
          error! Voluptatibus nulla nobis optio atque eaque excepturi aspernatur
          molestiae repellat sunt? Iste itaque, id animi ex eaque tempore
          veritatis! Ipsam qui quae tenetur id suscipit nisi blanditiis error
          vitae quisquam enim.
        </div>
      </motion.div>
    </>
  );
};

export default Glosariocarpetamobil;
