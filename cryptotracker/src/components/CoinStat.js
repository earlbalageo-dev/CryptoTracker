import React from 'react';
import PriceChange from './PriceChange';

const CoinStat = ({ title, price, change }) => {
  return (
    <>
      <div className='heroStats'>
        <div className='heroStatsTitle'>
          <p className='my-0'>{title}</p>
        </div>
        <div className='heroStatsValue mx-auto'>
          <div className='heroStatsPrice px-1'>
            <p>
              {price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
          <div className='heroStatspercent'>
            <PriceChange price={change} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinStat;
