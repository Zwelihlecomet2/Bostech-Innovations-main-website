import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatsNews from '../components/WhatsNews';
import CorporateServices from '../components/CorporateServices';
import Partners from '../components/Partners';
import ClientPartners from '../components/ClientPartners';
import News from '../components/News';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <WhatsNews />
      <CorporateServices />
      <Partners />
      <ClientPartners />
      <News />
    </>
  );
};

export default HomePage;