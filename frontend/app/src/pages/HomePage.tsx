import React from 'react';

import SocialWidget from '../components/widgets/SocialWidget';
import NewsletterWidget from '../components/widgets/NewsletterWidget';

import PostContent from '../components/sections/PostContent';
import Typography from '../components/sections/Typography';

import HomePageAPI from '../types/HomePageAPI';
import SocialAPI from '../types/SocialAPI';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

export interface HomePageProps  {
  entry: HomePageAPI[];
  social?: SocialAPI[];
}

const HomePage: React.FC<HomePageProps> = ({entry, social}) => {
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
            {entry.length > 0 &&
            <PostContent data={entry[0].body}/>
            }
            {/* <Typography /> */}
          </Col>

          <Col md="4">
            <SocialWidget social={social} />
            <NewsletterWidget />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default HomePage;
