import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import { LoadingContext } from '../context/LoadingContext';
//import axios from 'axios';
import CoinStat from './CoinStat';
import PriceChange from './PriceChange';
//import Loader from './Loader';
const Hero = () => {
  //   const [heroData, setHeroData] = useState({});
  //   const [isLoading, setLoading] = useContext(LoadingContext);
  //   useEffect(() => {
  //     setLoading(true);
  //     axios.get('https://api.coingecko.com/api/v3/global').then((response) => {
  //       setHeroData(response.data);

  //       //console.log(heroData);
  //     });
  //     setLoading(false);
  //   });

  //   if (isLoading || Object.keys(heroData).length == 0) return <Loader />;

  //------------------------------------------------------------------//
  //HARD CODED DUE TO I coundlt get API to WORK
  //-----------------------------------------------------------------//
  return (
    <Container className='px-4 py-5  hero my-4'>
      <h1 className=' fw-bold text-white text-center'>Crypto Tracker</h1>
      <Row className='text-white py-4'>
        <Col>
          <CoinStat
            title='Market Cap'
            //price={heroData.total_market_cap.usd}
            price={131239878978222}
            // change={heroData.data.market_cap_change_percentage_24h_usd}
            change={0.2}
          />
        </Col>
        <Col>
          <CoinStat
            title='Volume'
            // price={heroData.data.total_volume.usd}
            price={123}
            change={-0.56571}
          />
        </Col>
        <Col>
          <div className='coinStats'>
            <div className='coinStatsTitle'>
              <p className='my-0'>Btc Dominance</p>
            </div>
            <div className='coinStatsValue'>
              <p>
                44.70%
                <sup>
                  <PriceChange price={0.2} />
                </sup>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
