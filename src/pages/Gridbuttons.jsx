import Buttonofgrid from "../components/Buttonofgrid";
import { objectcssgrid } from "../data/Datagrid";

const Gridbuttons = () => {
  return (
    <>
      {objectcssgrid.map((data) => {
        return (
          <Buttonofgrid
            key={data.id}
            id={data.id}
            generalcss={data.generalcss}
            screenxl={data.screenxl}
            screenlg={data.screenlg}
            screenmd={data.screenmd}
            screensm={data.screensm}
            cssopen={data.cssopen}
            title={data.title}
            text={data.Text}
          />
        );
      })}
    </>
  );
};

export default Gridbuttons;
