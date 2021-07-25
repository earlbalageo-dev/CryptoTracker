import React, { useContext } from 'react';
import { FaveContext } from '../context/FaveCoinsContext';
import { Container } from 'react-bootstrap';
import CoinTable from './CoinTable';
const Favourite = () => {
  const [faveCoins, setFaveCoin] = useContext(FaveContext);
  return (
    <Container>
      <CoinTable coins={faveCoins} />
    </Container>
  );
};

export default Favourite;
