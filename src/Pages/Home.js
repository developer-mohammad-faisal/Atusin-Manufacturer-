import React, { Fragment } from 'react';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import BusinessSummary from '../Components/BusinessSummary';
import Parts from '../Components/Parts';
import PartsImage from '../Components/PartsImage';
import Reviews from '../Components/Reviews'

const Home = () => {
  return (
    <Fragment>
      <Banner/>
      <Parts/>
      <BusinessSummary/>
      <Reviews/>
      <PartsImage/>
      <Brands/>
    </Fragment>
  );
};

export default Home;