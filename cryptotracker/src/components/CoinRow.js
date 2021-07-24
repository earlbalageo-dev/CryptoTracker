import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaveContext } from '../context/FaveCoinsContext';
import PriceChange from './PriceChange';

const CoinRow = ({ coin }) => {
  const [faveCoins, setFaveCoin] = useContext(FaveContext);
  const addToFaveHandler = () => {
    console.log('added to fave');
    setFaveCoin((prevFaveCoin) => [...prevFaveCoin, coin]);
    //add to Local Storage
    localStorage.setItem('faveCoins', JSON.stringify(faveCoins));
  };
  const goToCoin = () => {
    console.log('going to coin');
    console.log(faveCoins);
  };
  return (
    <tr>
      <td onClick={goToCoin}>{coin.market_cap_rank}</td>
      <td onClick={goToCoin}>
        <img style={{ width: '20px' }} src={coin.image} />
        <span className='coinName'>{coin.id}</span> {'\u2022'}{' '}
        {coin.symbol.toUpperCase()}
      </td>
      <td onClick={goToCoin}>
        <PriceChange price={coin.price_change_percentage_24h} />
      </td>
      <td onClick={goToCoin}>
        {coin.current_price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </td>
      <td onClick={addToFaveHandler}>
        {faveCoins.includes(coin) ? (
          <i style={{ color: 'yellow' }} className='fas fa-star'></i>
        ) : (
          <i className='far fa-star'></i>
        )}
      </td>
    </tr>
  );
};

export default CoinRow;
