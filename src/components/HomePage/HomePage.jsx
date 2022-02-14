import React from 'react'
import millify from "millify";
import { Link } from 'react-router-dom';
import { Typography,Row,Col,Statistic } from 'antd';
import {Cryptocurrencies, News} from "../../components";
import {useGetCryptosQuery} from '../../services/cryptoApi'


const HomePage = () => {

  const {data,isFetching }= useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);

  if(isFetching) return ' Loading..'; 

  return (
    <>
    
    <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
    <Row>
      <Col span={12}><Statistic  title="Total Cryptocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic  title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic  title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic  title="Total 24h Cap" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic  title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className="home-heading-container">
      <Typography.Title className="home-title" level={2}>Top 10 Crypto Currencies</Typography.Title>
      <Typography.Title className="show-more" level={3}><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className="home-heading-container">
      <Typography.Title className="home-title" level={2}>Latest Crypto News </Typography.Title>
      <Typography.Title className="show-more" level={3}><Link to="/news">Show More</Link></Typography.Title>
    </div>
    <News simplified/>
    </>
  )
}

export default HomePage