import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import CoinStat from './CoinStat';
const Hero = () => {
  const [heroData, setHeroData] = useState({});
  const getHeroData = async () => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/global');
    setHeroData(data);
  };

  useEffect(() => {
    getHeroData();
    //console.log(heroData.data.total_market_cap.usd);
  }, []);
  return (
    <Container className='px-4 py-5 text-center hero my-4'>
      <h1 className=' fw-bold text-white'>Crypto Tracker</h1>
      <Row className='text-white py-4'>
        <Col>
          <CoinStat
            title='Market Cap'
            // price={heroData.data.total_market_cap.usd}
            price={12}
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
      </Row>
    </Container>
  );
};

export default Hero;
