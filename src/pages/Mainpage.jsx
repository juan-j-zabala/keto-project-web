import { Outlet } from "react-router-dom";

const Mainpage = () => {
  return (
    <div className="mb-0 ml-0 w-full h-screen">
      <div
        className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] h-full gap-2
      xl:grid-rows-[repeat(11,1fr)] xl:grid-cols-[repeat(22,1fr)] xl:gap-1 xl:rounded-3xl"
      >
        <Outlet /> {/* <Fullnavbar/><Glosario/><Gridbuttons/><Choose/> estos componentes estan siendo renderizados por el Outlet con react router dom*/}
      </div>
    </div>
  );
};

export default Mainpage;
