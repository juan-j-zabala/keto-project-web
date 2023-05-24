import { motion } from "framer-motion";
import { useState } from "react";
import Svgimg from "../components/Svgimg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";

const Glosariolistamobil = () => {
  const [selectedId, setSelectedId] = useState(false);

  return (
    <>
      <div
        className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] rounded-[3px] bg-black-keto col-start-1 col-end-[29] row-start-[1] row-end-[21] text-white gap-2
          sm:bg-black-keto sm:col-start-1 sm:col-end-[29] sm:row-start-1 sm:row-end-[20]
          xl:col-start-1 xl:col-end-6 xl:row-start-1 xl:row-end-[22] xl:rounded-xl"
      >
        <motion.div
          className={`bg-white grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-2 col-end-[28] row-start-1 my-1 rounded-xl overflow-hidden ${
            selectedId ? "row-end-[22]" : "row-end-4"
          }`}
          layout
          style={{ borderRadius: "12px" }}
        >
          <motion.div
            className={`bg-white grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-1 col-end-[29] row-start-1 rounded-xl z-0 ${
              selectedId ? "row-end-4 mb-3" : "row-end-[23]"
            }`}
            layout
            style={{ borderRadius: "12px" }}
          >
            <motion.div
              layout
              className="bg-black col-start-1 col-end-[18] row-start-1 row-end-[23] rounded-xl m-1 flex justify-center items-center"
              //   onClick={() => setSelectedId("row-end-[11]")}
            >
              <p>lista 1</p>
            </motion.div>
            <motion.div
              layout
              className="bg-white col-start-[18] col-end-[29] row-start-1 row-end-[23] rounded-xl m-1 flex justify-center items-center text-black"
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
          <a
            href=""
            className={`bg-black col-start-1 col-end-[29] row-start-4 row-end-7 m-1 rounded-xl flex justify-center items-center text-white ${
              selectedId ? "" : "hidden"
            }`}
          >
            hello
          </a>
          <a
            href=""
            className={`bg-black col-start-1 col-end-[29] row-start-7 row-end-[10] m-1 rounded-xl flex justify-center items-center text-white ${
              selectedId ? "" : "hidden"
            }`}
          >
            hello
          </a>
          <a
            href=""
            className={`bg-black col-start-1 col-end-[29] row-start-[10] row-end-[13] m-1 rounded-xl flex justify-center items-center text-white ${
              selectedId ? "" : "hidden"
            }`}
          >
            hello
          </a>
          <a
            href=""
            className={`bg-black col-start-1 col-end-[29] row-start-[13] row-end-[16] m-1 rounded-xl flex justify-center items-center text-white ${
              selectedId ? "" : "hidden"
            }`}
          >
            hello
          </a>
          <a
            href=""
            className={`bg-black col-start-1 col-end-[29] row-start-[16] row-end-[19] m-1 rounded-xl flex justify-center items-center text-white ${
              selectedId ? "" : "hidden"
            }`}
          >
            hello
          </a>
          <a
            href=""
            className={`bg-black col-start-1 col-end-[29] row-start-[19] row-end-[22] m-1 rounded-xl flex justify-center items-center text-white ${
              selectedId ? "" : "hidden"
            }`}
          >
            hello
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Glosariolistamobil;
