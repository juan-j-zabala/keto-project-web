import {motion} from 'framer-motion'
import { useState } from "react";
import Svgimg from "../components/Svgimg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";
import { Link } from 'react-router-dom';

const Glosariolistas = ({data}) => {
  const [selectedId, setSelectedId] = useState(false);

  return (
    <>
        <motion.div
          className={`bg-white grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-1 col-end-[29] mx-1 my-1 rounded-xl overflow-hidden ${
            selectedId ? data.listaopen : data.listaclose
          }`}
          layout
          style={{borderRadius: "12px"}}
        >
          <motion.div
            className={`bg-white grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-1 col-end-[29] row-start-1 rounded-xl  ${
              selectedId ? "row-end-4 mb-3" : "row-end-[23]"
            }`}
            layout
            style={{borderRadius: "12px"}}
          >
            <motion.div
              layout
              className="bg-black col-start-1 col-end-[18] row-start-1 row-end-[23] rounded-xl m-1 flex justify-center items-center"
            //   onClick={() => setSelectedId("row-end-[11]")}
            >
              <p>{data.lista}</p>
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
          <Link to={data.urlmobil1} className={`z-0 bg-black col-start-1 col-end-[29] row-start-4 row-end-7 m-1 rounded-xl flex justify-center items-center text-white xl:hidden ${selectedId ? "": "hidden"}`}> mobil{data.palabra1}</Link>
          <Link to={data.urlmobil2} className={`z-0 bg-black col-start-1 col-end-[29] row-start-7 row-end-[10] m-1 rounded-xl flex justify-center items-center text-white xl:hidden ${selectedId ? "": "hidden"}`}> mobil{data.palabra2}</Link>
          <Link to={data.urlmobil3} className={`z-0 bg-black col-start-1 col-end-[29] row-start-[10] row-end-[13] m-1 rounded-xl flex justify-center items-center text-white xl:hidden ${selectedId ? "" : "hidden" }`}> mobil{data.palabra3}</Link>
          <Link to={data.urlmobil4} className={`z-0 bg-black col-start-1 col-end-[29] row-start-[13] row-end-[16] m-1 rounded-xl flex justify-center items-center text-white xl:hidden ${selectedId ? "" : "hidden" }`}> mobil{data.palabra4}</Link>
          <Link to={data.urlmobil5} className={`z-0 bg-black col-start-1 col-end-[29] row-start-[16] row-end-[19] m-1 rounded-xl flex justify-center items-center text-white xl:hidden ${selectedId ? "" : "hidden" }`}> mobil{data.palabra5}</Link>
          <Link to={data.urlmobil6} className={`z-0 bg-black col-start-1 col-end-[29] row-start-[19] row-end-[22] m-1 rounded-xl flex justify-center items-center text-white xl:hidden ${selectedId ? "" : "hidden" }`}> mobil{data.palabra6}</Link>

          <Link to={data.url1} className={`z-0 bg-black col-start-1 col-end-[29] row-start-4 row-end-7 m-1 rounded-xl flex justify-center items-center text-white max-xl:hidden ${selectedId ? "": "hidden"}`}> pc{data.palabra1}</Link>
          <Link to={data.url2} className={`z-0 bg-black col-start-1 col-end-[29] row-start-7 row-end-[10] m-1 rounded-xl flex justify-center items-center text-white max-xl:hidden ${selectedId ? "": "hidden"}`}> pc{data.palabra2}</Link>
          <Link to={data.url3} className={`z-0 bg-black col-start-1 col-end-[29] row-start-[10] row-end-[13] m-1 rounded-xl flex justify-center items-center text-white max-xl:hidden ${selectedId ? "" : "hidden" }`}> pc{data.palabra3}</Link>
          <Link to={data.url4} className={`z-0 bg-black col-start-1 col-end-[29] row-start-[13] row-end-[16] m-1 rounded-xl flex justify-center items-center text-white max-xl:hidden ${selectedId ? "" : "hidden" }`}> pc{data.palabra4}</Link>
          <Link to={data.url5} className={`z-0 bg-black col-start-1 col-end-[29] row-start-[16] row-end-[19] m-1 rounded-xl flex justify-center items-center text-white max-xl:hidden ${selectedId ? "" : "hidden" }`}> pc{data.palabra5}</Link>
          <Link to={data.url6} className={`z-0 bg-black col-start-1 col-end-[29] row-start-[19] row-end-[22] m-1 rounded-xl flex justify-center items-center text-white max-xl:hidden ${selectedId ? "" : "hidden" }`}> pc{data.palabra6}</Link>
        </motion.div>
    </>
  )
}

export default Glosariolistas