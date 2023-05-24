import Navbar from "../components/Navbar";

const Fullnavbar = () => {
  return (
    <>
      <nav
        className="bg-neutral-950 shadow-sm shadow-black col-start-2 col-end-[28] row-start-1 row-end-3 rounded-[3px] mt-1
          sm:bg-neutral-950 sm:col-start-2 sm:col-end-[28] sm:row-start-1 sm:row-end-3
          xl:col-start-5 xl:col-end-[23] xl:row-start-1 xl:row-end-3 xl:mx-3 xl:mt-4 xl:mb-6 xl:rounded-xl"
      ></nav>
      <Navbar />
    </>
  );
};

export default Fullnavbar;
