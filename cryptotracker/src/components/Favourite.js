import React, { useContext } from 'react';
import { FaveContext } from '../context/FaveCoinsContext';
const Favourite = () => {
  const [faveCoins, setFaveCoin] = useContext(FaveContext);
  return <div>This is a Favourite page</div>;
};

export default Favourite;
