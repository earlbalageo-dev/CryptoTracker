import React from 'react';

const PriceChange = ({ price }) => {
  return (
    <>
      {price > 0 ? (
        <i style={{ color: '#718C00' }} className='fas fa-sort-up'>
          {price.toFixed(2)}%
        </i>
      ) : (
        <i style={{ color: '#C82829' }} className='fas fa-sort-down'>
          {price.toFixed(2)}%
        </i>
      )}
    </>
  );
};

export default PriceChange;
