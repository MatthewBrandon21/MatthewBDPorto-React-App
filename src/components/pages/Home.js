import React from 'react';
import '../../App.css';
import AboutMe from '../AboutMe';
import HeroSection from '../HeroSection';
import TabSection from '../TabSection';
import RecentProjectSlider from '../RecentProjectSlider';
import ListProject from '../ListProject';
import ContactMe from '../ContactMe';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <TabSection />
      <RecentProjectSlider />
      <ListProject />
      <ContactMe />
      <Footer />
    </>
  );
}

export default Home;
