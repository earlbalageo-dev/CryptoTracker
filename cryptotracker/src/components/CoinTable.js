import React, { useContext } from 'react';
import { CoinContext } from '../CoinContext';
import { Table } from 'react-bootstrap';
import CoinRow from './CoinRow';

const CoinTable = () => {
  const coins = useContext(CoinContext);

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
