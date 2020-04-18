import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

import CategoryHeader from '../components/headers/CategoryHeader';
import CategoryPage from '../pages/CategoryPage';

const CategoryView: React.FC<{}> = () => {

  return (
    <>
      <CallieNavbar>
        <CategoryHeader />
      </CallieNavbar>
      <CategoryPage />
      <CallieFooter />
    </>
  );
};

export default CategoryView;
