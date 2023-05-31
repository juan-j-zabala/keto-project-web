import { Link } from "react-router-dom";

const Multitask = ({data}) => {
  return (
    <>
      {data.title ? (
        <h1 className={`${data.css}`}>{data.title}</h1>
      ) : data.text ? (
        <>{data.text}</>
      ) : data.img ? (
        <div className={`${data.css}`}>
          <img className={`${data.imgcss}`} src={data.img} alt={data.alt} width={data.width} height={data.height} />
        </div>
      ) : data.url ? (
        <Link to={data.url} className={`${data.css}`} >{data.urltext}</Link>
      ) : data.br ? (
        <br />
      ) : null}
    </>
  );
};

export default Multitask;
