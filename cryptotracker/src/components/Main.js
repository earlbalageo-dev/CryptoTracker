import React, { useEffect, useState, useContext } from 'react';
import { LoadingContext } from '../context/LoadingContext';
import { Container } from 'react-bootstrap';
import CoinTable from './CoinTable';
import Hero from './Hero';
import axios from 'axios';
import Loader from './Loader';
const Main = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useContext(LoadingContext);
  // const getAllCoins = async () => {
  //   setLoading(true);
  //   const { data } = await axios.get(
  //     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
  //   );
  //   setCoins(data);
  // };

  // useEffect(() => {
  //   getAllCoins();
  //   setLoading(false);
  // }, [coins]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      )
      .then((response) => {
        setCoins(response.data);
      });
    setLoading(false);
  });

  // if (isLoading) return <Loader />;

  return (
    <Container>
      <Hero />
      <CoinTable coins={coins} />
    </Container>
  );
};

export default Main;
