import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import AboutHeader from '../components/headers/AboutHeader';
import ContactPage from '../pages/ContactPage';

const ContactView: React.FC<{}> = () => {

  return (
    <>
      <CallieNavbar>
        <AboutHeader />
      </CallieNavbar>
      <ContactPage />
      <CallieFooter />
    </>
  );
};

export default ContactView;
