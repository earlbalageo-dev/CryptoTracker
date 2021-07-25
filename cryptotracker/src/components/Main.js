import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CoinTable from './CoinTable';
import Hero from './Hero';
import axios from 'axios';
const Main = () => {
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
    <Container>
      <Hero />
      <CoinTable coins={coins} />
    </Container>
  );
};

export default Main;
