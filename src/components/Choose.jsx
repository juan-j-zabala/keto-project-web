import Lottie from "lottie-react";
import choose from "../assets/75572-choose-from-list.json";
import index from "../assets/index-svgrepo-com.svg";
import guia from "../assets/document-svgrepo-com.svg";
import Svgimg from "../components/Svgimg";

const Choose = () => {
  return (
    <>
      <div
        className="xl:col-start-5 xl:col-end-[23] xl:row-start-3 xl:row-end-[12] xl:mx-3 xl:mb-3 xl:rounded-lg
      bg-skin-background flex-col justify-center items-center col-start-1 col-end-[29] row-start-3 row-end-[20] "
      >
        <Lottie className="h-4/5" animationData={choose} />
        <div className="flex-col justify-center items-center ">
          <p className="flex justify-center mb-4 text-skin-inverted">
            elige una guia o un tema para enpezar
          </p>
          <div className="flex justify-center gap-4">
            <Svgimg src={index} alt={"index"} height="40" width="40" />
            <Svgimg src={guia} alt={"guia"} height="40" width="40" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
