import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [open, setOpen] = useState(null);
  return (
    <Context.Provider value={[open, setOpen]}>
      {props.children}
    </Context.Provider>
  );
};
