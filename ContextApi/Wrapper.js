import React, { createContext, useState } from "react";

export const Store = createContext();

export const Wrapper = ({ children }) => {
  const [todo, setTodo] = useState([]);
  return <Store.Provider value={{ todo, setTodo }}>{children}</Store.Provider>;
};
