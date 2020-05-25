import React from 'react';

import Typography from '../components/sections/Typography';

import SocialWidget from '../components/widgets/SocialWidget';
import NewsletterWidget from '../components/widgets/NewsletterWidget';

import PostContent from '../components/sections/PostContent';

import ClassCarousel from '../components/carousel/ClassCarousel';
// import ClassCarousel from '../components/carousel/Examples';

import { HomePageAPI } from '../types/HomePageAPI';
import useGetHomePageService from '../api/useGetHomePageService';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

const HomePage: React.FC<{}> = () => {
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
    {/* Row */}
    {/* Section */}
  	<div className="section">
      {/* Container */}
      <Container>

        {/* Row */}
        <Row>
          <Col md="8">
            {posts.length > 0 &&
            <PostContent data={posts[0].body}/>
            }
            {/* <Typography /> */}
          </Col>

          <Col md="4">
            <SocialWidget />
            <NewsletterWidget />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default HomePage;
