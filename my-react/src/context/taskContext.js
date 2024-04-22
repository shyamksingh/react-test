import React, { createContext, useState, useContext } from 'react';
import data from '../data.ts';

// Create a context
const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState(data);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};


export const useMyContext = () => {
    return useContext(MyContext);
  };