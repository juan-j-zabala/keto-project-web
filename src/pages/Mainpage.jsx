import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Glosario from "./Glosario";
import Gridbuttons from "./Gridbuttons";
import Glosariomobil from "./Glosariomobil";

const Mainpage = () => {
  return (
    <div className="mb-0 ml-0 w-full h-screen">
      <div
        className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] h-full gap-2 
      xl:grid-rows-[repeat(11,1fr)] xl:grid-cols-[repeat(22,1fr)] xl:gap-1 xl:rounded-3xl"
      >
        <Glosario />
        <Gridbuttons />
        <Glosariomobil/>
        <nav
          className="bg-neutral-950 shadow-sm shadow-black col-start-2 col-end-[28] row-start-1 row-end-3 rounded-[3px] mt-1
          sm:bg-neutral-950 sm:col-start-2 sm:col-end-[28] sm:row-start-1 sm:row-end-3
          xl:col-start-5 xl:col-end-[23] xl:row-start-1 xl:row-end-3 xl:mx-3 xl:mt-4 xl:mb-6 xl:rounded-xl"
        >git</nav>
        <Navbar />
      </div>
    </div>
  );
};

export default Mainpage;
