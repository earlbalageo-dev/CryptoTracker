import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LoadingContext } from '../context/LoadingContext';
import axios from 'axios';
import CoinStat from './CoinStat';
import SocialButton from './SocialButton';
import Loader from './Loader';

const CoinScreen = ({ match }) => {
  const [coinInfo, setCoinInfo] = useState({});
  const [isLoading, setLoading] = useContext(LoadingContext);
  const [isFave, setIsFave] = useState(false);

  const coinId = match.params.id;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((response) => {
        setCoinInfo(response.data);
      });
    setLoading(false);
  });

  const faveHandler = () => {
    //e.preventDefault();
    if (!isFave) {
      setIsFave(true);
    } else {
      setIsFave(false);
    }
  };

  if (isLoading || Object.keys(coinInfo).length === 0) {
    return <Loader />;
  }

  return (
    <Container className='py-5'>
      <Row>
        <Col className='py-3' sm={12} md={6}>
          <div className='coinTitle'>
            <div>
              <h1>
                <img
                  style={{ width: '50px' }}
                  className='mx-3'
                  src={coinInfo.image.large}
                  alt={coinInfo.name}
                />
                {coinInfo.name}{' '}
                <sup
                  className='px-1 py-1'
                  style={{
                    backgroundColor: '#FF9332',
                    fontSize: '1rem',
                    borderRadius: '5px',
                    color: 'black',
                  }}
                >
                  #{coinInfo.market_cap_rank}
                </sup>
                <sup onClick={faveHandler}>
                  {isFave ? (
                    <i style={{ color: 'yellow' }} className='fas fa-star'></i>
                  ) : (
                    <i className='far fa-star'></i>
                  )}
                </sup>
              </h1>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} className='px-5'>
          <Row>
            <Col>
              <CoinStat
                sm={6}
                title='Current Price'
                price={coinInfo.market_data.current_price.usd}
                change={coinInfo.market_data.price_change_percentage_24h}
              />
            </Col>
            <Col>
              <CoinStat
                sm={6}
                title='Market Cap'
                price={coinInfo.market_data.market_cap.usd}
                change={coinInfo.market_data.market_cap_change_percentage_24h}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='pt-5'>
        <Col>
          <div className='coinStats'>
            <div className='coinStatsTitle'>
              <p className='my-0'>Socials</p>
            </div>
            <Row className='coinStatsValue'>
              <Col>
                <a href='www.asd.com'>{coinInfo.name}</a>
              </Col>
              <Col>
                <SocialButton name='Reddit' icon='fab fa-reddit' />
              </Col>
              <Col>
                <SocialButton name='Facebook' icon='fab fa-reddit' />
              </Col>
              <Col>
                <SocialButton name='Twitter' icon='fab fa-reddit' />
              </Col>
              <Col>
                <SocialButton name='Telegram' icon='fab fa-reddit' />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className='py-5'>
        <h4>About</h4>
        {/* <p>{coinInfo.description.en}</p> */}
        <div
          className='coinInfo'
          dangerouslySetInnerHTML={{ __html: coinInfo.description.en }}
        />
      </Row>
    </Container>
  );
};

export default CoinScreen;
