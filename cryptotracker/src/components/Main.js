import React from 'react';
import { Container } from 'react-bootstrap';
import CoinTable from './CoinTable';
import Hero from './Hero';
const Main = () => {
  return (
    <Container>
      <Hero />
      <CoinTable />
    </Container>
  );
};

export default Main;
