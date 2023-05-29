  import Glosariolista from "./Glosariolista";

const Glosariolistamobil = () => {
  return (
    <>
      <div
        className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] rounded-[3px] bg-black-keto col-start-1 col-end-[29] row-start-[1] row-end-[21] text-white gap-2
          sm:bg-black-keto sm:col-start-1 sm:col-end-[29] sm:row-start-1 sm:row-end-[20]
          xl:col-start-1 xl:col-end-6 xl:row-start-1 xl:row-end-[22] xl:rounded-xl"
      >
        <Glosariolista />
      </div>
    </>
  );
};

export default Glosariolistamobil;
