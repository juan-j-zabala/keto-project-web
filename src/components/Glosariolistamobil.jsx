import Glosariolista from "./Glosariolista";

const Glosariolistamobil = () => {
  return (
    <>
      <div
        className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] rounded-[3px] bg-skin-layout col-start-1 col-end-[29] row-start-[1] row-end-[21] text-skin-inverted gap-2
          sm:col-start-1 sm:col-end-[29] sm:row-start-1 sm:row-end-[20]
          xl:col-start-1 xl:col-end-6 xl:row-start-1 xl:row-end-[22] xl:rounded-xl"
      >
        
        <Glosariolista />
      </div>
    </>
  );
};

export default Glosariolistamobil;
