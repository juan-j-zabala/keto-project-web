import { AnimatePresence, LayoutGroup } from "framer-motion";
import { objectcssnavbarmobil } from "../data/Datanavbarmobil";
import Buttonofmobil from "./Buttonofmobil";

const Buttonsmodalsmobil = () => {
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {objectcssnavbarmobil.map((data) => {
          return (
            <LayoutGroup key={data.id} id={data.id}>
              <Buttonofmobil
                key={data.id}
                id={data.id}
                title={data.title}
                generalcss={data.generalcss}
                rutas={data.rutas}
                dataimg={data.dataimg}
              />
            </LayoutGroup>
          );
        })}
      </AnimatePresence>
    </>
  );
};

export default Buttonsmodalsmobil;
