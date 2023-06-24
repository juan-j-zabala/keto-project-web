import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [open, setOpen] = useState(null);
  const [themecolor, setThemecolor] = useState();

 

  return (
    <Context.Provider value={[open, setOpen, themecolor, setThemecolor]}>
      {props.children}
    </Context.Provider>
  );
};
