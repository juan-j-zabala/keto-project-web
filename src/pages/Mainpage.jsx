import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Glosario from "./Glosario";
import Gridbuttons from "./Gridbuttons";
import Glosariomobil from "./Glosariomobil";
import Fullnavbar from "../components/Fullnavbar";

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
        <Fullnavbar/>
      </div>
    </div>
  );
};

export default Mainpage;
