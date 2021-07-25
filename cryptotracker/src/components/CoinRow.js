import React, { useContext, useEffect, useState } from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { FaveContext } from '../context/FaveCoinsContext';
import PriceChange from './PriceChange';

const CoinRow = ({ coin }) => {
  const [faveCoins, setFaveCoin] = useContext(FaveContext);
  const [isFave, setIsFave] = useState(false);

  const toggleFaveHandler = () => {
    if (!isFave) {
      setFaveCoin((prevFaveCoins) => [...prevFaveCoins, coin]);
      //localStorage.setItem('faveCoins', JSON.stringify(faveCoins));
      setIsFave(true);
    } else {
      setFaveCoin(faveCoins.filter((x) => x.id !== coin.id));
      //localStorage.setItem('faveCoins', JSON.stringify(faveCoins));
      setIsFave(false);
    }
  };
  useEffect(() => {
    if (faveCoins.filter((e) => e.id === coin.id).length > 0) {
      setIsFave(true);
    }
  }, [isFave]);

  return (
    <tr>
      <LinkContainer to={`/coin/${coin.id}`}>
        <td>{coin.market_cap_rank}</td>
      </LinkContainer>

      <LinkContainer to={`/coin/${coin.id}`}>
        <td>
          <img style={{ width: '20px' }} src={coin.image} alt={coin.id} />
          <span className='coinName'>{coin.id}</span> {'\u2022'}{' '}
          {coin.symbol.toUpperCase()}
        </td>
      </LinkContainer>

      <LinkContainer to={`/coin/${coin.id}`}>
        <td>
          <PriceChange price={coin.price_change_percentage_24h} />
        </td>
      </LinkContainer>

      <LinkContainer to={`/coin/${coin.id}`}>
        <td>
          {coin.current_price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </td>
      </LinkContainer>

      <td onClick={toggleFaveHandler}>
        {isFave ? (
          <i style={{ color: 'yellow' }} className='fas fa-star'></i>
        ) : (
          <i className='far fa-star'></i>
        )}
      </td>
    </tr>
  );
};

export default CoinRow;
