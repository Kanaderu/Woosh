import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import RegularHeader from '../components/headers/RegularHeader';
import RegularPage from '../pages/RegularPage';

const RegularView: React.FC<{}> = () => {

  return (
    <>
      <CallieNavbar>
        <RegularHeader />
      </CallieNavbar>
      <RegularPage />
      <CallieFooter />
    </>
  );
};

export default RegularView;
