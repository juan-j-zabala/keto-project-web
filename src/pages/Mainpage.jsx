import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../context/ContextProvider";

const Mainpage = () => {
  const [themecolor, setThemecolor] = useContext(Context);
  const [savetheme, Setsavetheme] = useState(() => {
    const themecurrent = window.localStorage.getItem("theme");
    return themecurrent ? themecurrent : "";
  });

  useEffect(() => {
    let data = localStorage.getItem("theme");
    if (data) {
      setThemecolor(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", themecolor);
  }, [themecolor]);

  console.log(themecolor, "color");
  console.log(savetheme, "hola");
  console.log(window.localStorage.getItem("theme"));

  const themes =
    themecolor === "party"
      ? "theme-party"
      : themecolor === "lofy"
      ? "theme-lofy"
      : themecolor === "black"
      ? "theme-dark"
      : themecolor === "white"
      ? ""
      : savetheme === "party"
      ? "theme-party"
      : savetheme === "lofy"
      ? "theme-lofy"
      : savetheme === "black"
      ? "theme-dark"
      : savetheme === "white"
      ? ""
      : "";

  console.log(themes);
  return (
    <div className={`mb-0 ml-0 w-full h-screen bg-skin-background ${themes}`}>
      <div
        className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] h-full gap-2
      xl:grid-rows-[repeat(11,1fr)] xl:grid-cols-[repeat(22,1fr)] xl:gap-1 xl:rounded-3xl"
      >
        <Outlet />
        {/* <Fullnavbar/><Glosario/><Gridbuttons/><Choose/> estos componentes estan siendo renderizados por el Outlet con react router dom*/}
      </div>
    </div>
  );
};

export default Mainpage;
