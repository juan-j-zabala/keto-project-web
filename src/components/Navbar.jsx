import Buttonmodalmobil from "./Buttonmodalmobil"
import Buttonsmodals from "./Buttonsmodals"

function Navbar() {
  return (
    <>
        <Buttonsmodals hidden={"max-lg:hidden"}/>
        <Buttonmodalmobil/>
        {/* <div className="bg-neutral-950 flex justify-center items-center col-start-[8] col-end-[10] row-start-1 row-end-3 my-4 text-white max-lg:hidden">home</div> */}
        {/* <div className="bg-neutral-950 flex justify-center items-center col-start-[11] col-end-[13] row-start-1 row-end-3 my-4 text-white max-lg:hidden">temario</div> */}
        {/* <div className="bg-neutral-950 flex justify-center items-center col-start-[14] col-end-[16] row-start-1 row-end-3 my-4 text-white max-lg:hidden">guia</div> */}
        {/* <div className="bg-neutral-950 flex justify-center items-center col-start-[17] col-end-[19] row-start-1 row-end-3 my-4 text-white max-lg:hidden">glosario</div>    */}
        {/* <div className="bg-neutral-950 flex justify-center items-center col-start-[20] col-end-[22] row-start-1 row-end-3 my-4 text-white max-lg:hidden">color temas</div> */}
    </>
  )
}

export default Navbar