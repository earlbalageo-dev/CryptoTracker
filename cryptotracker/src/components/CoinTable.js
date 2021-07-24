import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import CoinRow from './CoinRow';
import axios from 'axios';
const CoinTable = () => {
  const [coins, setCoins] = useState([]);

  const getAllCoins = async () => {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
    );
    setCoins(data);
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <Table striped responsive borderless hover variant='dark'>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>24h Change</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <CoinRow key={coin.id} coin={coin} />
        ))}
      </tbody>
    </Table>
  );
};

export default CoinTable;
