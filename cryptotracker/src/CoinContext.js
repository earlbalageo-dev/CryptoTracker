import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const CoinContext = createContext();

export const CoinProvider = (props) => {
  const [coins, getCoins] = useState([]);

  const getAllCoins = async () => {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
    );
    getCoins(data);
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <CoinContext.Provider value={coins}>{props.children}</CoinContext.Provider>
  );
};
