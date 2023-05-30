import Buttonofgrid from "../components/Buttonofgrid";

const Gridbuttons = ({ objectcssgrid }) => {
  return (
    <>
      {objectcssgrid.map((data) => {
        return <Buttonofgrid key={data.id} id={data.id} css={data.css} />;
      })}
    </>
  );
};

export default Gridbuttons;
