import React from 'react';

//import CallieNavbar from '../components/Navbar/CallieNavbar';
import CallieNavbar from './components/navbar/Navbar';
//import CallieNavbar from '../components/Navbar/CallieNavbar2';
import BlogSection from './components/sections/BlogPage';
import CallieFooter from './components/footer/Footer';

const Callie: React.FC<{}> = () => {

  //<Header />
  return (
    <>
      <CallieNavbar />
      <BlogSection />
      <CallieFooter />
    </>
  );
};

export default Callie;
