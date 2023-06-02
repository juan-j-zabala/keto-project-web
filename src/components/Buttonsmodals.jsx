import { AnimatePresence, LayoutGroup } from "framer-motion";
import Buttonmodal from "./Buttonmodal";
import { objectcssnavbar } from "../data/Datanavbar";

const Buttonsmodals = ({hidden=null}) => {
  return (
    <>
      <AnimatePresence  initial={false}>
        {objectcssnavbar.map((data) => {
          return (
            <LayoutGroup key={data.id} id={data.id}>  {/* text to use key instead of id and then see if it work to fixing the animation error in the console */}
              <Buttonmodal
                key={data.id}
                title={data.title}
                generalcss={data.generalcss}
                modalopencss={data.modalopencss}
                hidden={hidden}
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

export default Buttonsmodals;
