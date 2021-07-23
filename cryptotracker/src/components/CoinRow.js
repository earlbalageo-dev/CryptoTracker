import React from 'react';
import { Link } from 'react-router-dom';
const CoinRow = ({ coin }) => {
  const addToFaveHandler = () => {
    console.log();
  };
  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td>{coin.id}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <i style={{ color: '#718C00' }} class='fas fa-sort-up'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </i>
        ) : coin.price_change_percentage_24h < 0 ? (
          <i style={{ color: '#C82829' }} class='fas fa-sort-down'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </i>
        ) : (
          coin.price_change_percentage_24h
        )}
      </td>
      <td>{coin.current_price}</td>
      <td></td>
    </tr>
  );
};

export default CoinRow;
