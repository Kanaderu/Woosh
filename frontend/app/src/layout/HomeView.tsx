import React from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import CallieFooter from '../components/footers/Footer';

// import RegularHeader from '../components/headers/RegularHeader';
import CarouselHeader from '../components/headers/CarouselHeader';
import HomePage from '../pages/HomePage';

import HomePageAPI from '../types/HomePageAPI';
import useGetHomePageService from '../api/useGetHomePageService';

const HomeView: React.FC<{}> = () => {
  var posts: HomePageAPI[] = [];
  const results = useGetHomePageService();

  if(results.status == "loaded"){
    posts = results.payload.items;
    console.log(posts);
  } else {
    // handle state while loading
  }

  return (
    <>
      <CallieNavbar>
        {posts.length > 0 &&
          <CarouselHeader images={posts[0].carousel_images} />
        }
      </CallieNavbar>
      <HomePage posts={posts}/>
      <CallieFooter />
    </>
  );
};

export default HomeView;
