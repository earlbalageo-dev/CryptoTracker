import React, { useState, useEffect, createContext } from 'react';

export const FaveContext = createContext();

export const FaveCoinsProvider = (props) => {
  const initialState = [];
  // localStorage.getItem('faveCoins')
  //   ? JSON.parse(localStorage.getItem('faveCoins'))
  //   : [];
  const [faveCoins, setFaveCoin] = useState(initialState);
  useEffect(() => {}, []);
  return (
    <FaveContext.Provider value={[faveCoins, setFaveCoin]}>
      {props.children}
    </FaveContext.Provider>
  );
};
