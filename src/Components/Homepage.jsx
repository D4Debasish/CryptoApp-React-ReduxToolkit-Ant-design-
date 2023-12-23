import React from 'react'
import  '../CssFiles/Home.css'
import { Typography, Row, Col, Statistic } from 'antd';
// import millify from 'millify';
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../Services/CryptoApi';
import Cryptocurrencies from './Cryptocurrencies';

const { Title } = Typography;

function Homepage() {
   const {data, isFetching} =useGetCryptosQuery();
   console.log(data)
   const globalStats = data?.data?.stats;
  
   if(isFetching) return 'Loading...';
  return (
    <div className='home__des'>
      <Title level={2} className='heading'>GLOBAL CRYPTOCURRENCIES STATUS</Title>
         <Row className='home__row'>
         <Col span={12}><Statistic title="Total CryptoCurriencies" value={globalStats}/></Col>
         <Col span={12}><Statistic title="Total Market Cap" value={globalStats}/></Col>
         <Col span={12}><Statistic title="Total Market" value={globalStats}/></Col>
         <Col span={12}><Statistic title="Total Exchanges" value={globalStats}/></Col>
         <Col span={12}><Statistic title="Total 24th Market value" value={globalStats}/></Col>
         
         </Row> <br />
         <h2 className='parah2'>SORRY FOR THE INCOVENIENCE BUT DUE TO SOME API ERRORS THE SITE IS NOT WORKING PROPERLY</h2>
         <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
         
      
    </div>
  )
}
  
export default Homepage
