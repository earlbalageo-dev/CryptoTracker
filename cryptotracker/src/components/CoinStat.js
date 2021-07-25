import React from 'react';
import PriceChange from './PriceChange';

const CoinStat = ({ title, price, change }) => {
  return (
    <>
      <div className='coinStats'>
        <div className='coinStatsTitle'>
          <p className='my-0'>{title}</p>
        </div>
        <div className='coinStatsValue'>
          <p>
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
            <sup>
              <PriceChange price={change} />
            </sup>
          </p>
        </div>
      </div>
    </>
  );
};

export default CoinStat;
