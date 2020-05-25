import React from 'react';

import SocialWidget from '../components/widgets/SocialWidget';
import NewsletterWidget from '../components/widgets/NewsletterWidget';

import PostContent from '../components/sections/PostContent';
import Typography from '../components/sections/Typography';

import { HomePageAPI } from '../types/HomePageAPI';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

export interface HomePageProps  {
  posts: HomePageAPI[]
}

const HomePage: React.FC<HomePageProps> = ({posts}) => {
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
