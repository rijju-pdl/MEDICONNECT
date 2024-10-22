import { set } from "mongoose";
import React, { createContext, useContext, useState } from "react";


const GlobalContext = createContext(); //globalstorage

export default function GlobalContextProvider({ children }) {
  const [user,setUser] =  useState({

    id: "",
    name: "",
    accessToken: "",
    email: "",
  });

  const login = (userData) => setUser(userData);
  const logout = () => setUser({
    id: "",
    name: "",
    accessToken: "",
    email: "",
  });
  
  return( <GlobalContext.Provider 
  value={{ user, login, logout }}>
    {children}
  </GlobalContext.Provider>);
}  {/*childern can access */}

export const useGlobalContext = () => 
{
  return useContext(GlobalContext);
}