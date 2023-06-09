import Lottie from "lottie-react";
import pagenot from "../assets/128135-page-not-found.json";
import back from "../assets/back-entrance-exit-logout-quit-svgrepo-com.svg";
import Svgimg from "../components/Svgimg";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="bg-skin-background mb-0 ml-0 w-full h-screen flex-col justify-center items-center">
      <Lottie className="h-3/4" animationData={pagenot} />
      <div className="bg-skin-layout rounded-md w-1/6 h-1/6 flex justify-center items-center m-auto shadow-md shadow-black">
        <Link to={"/"}>
          <Svgimg src={back} alt={"back"} width="40" height="40" />
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
