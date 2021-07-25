import React from 'react';
import { Table } from 'react-bootstrap';
import CoinRow from './CoinRow';
//import axios from 'axios';
const CoinTable = ({ coins }) => {
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
