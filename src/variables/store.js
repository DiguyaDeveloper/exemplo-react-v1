import * as React from "react";
import { useState, createContext, useContext } from "react";

const StoreContext = createContext([{}, () => {}]);

export const useStore = () => {
  const [store, setStore] = useContext(StoreContext);
  return [store, setStore];
};
export const StoreProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <StoreContext.Provider value={[state, setState]}>
      {" "}
      {children}{" "}
    </StoreContext.Provider>
  );
};
