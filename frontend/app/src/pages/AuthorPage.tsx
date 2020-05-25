import React from 'react';

import PostHot from '../components/sections/PostHot';
import PostGallery from '../components/sections/PostGallery';
import PostRow from '../components/sections/PostRow';

import SocialWidget from '../components/widgets/SocialWidget';
import CategoryWidget from '../components/widgets/CategoryWidget';
import NewsletterWidget from '../components/widgets/NewsletterWidget';
import PostWidget from '../components/widgets/PostWidget';
import GalleryWidget from '../components/widgets/GalleryWidget';
import AdWidget from '../components/widgets/AdWidget';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

const AuthorPage: React.FC<{}> = () => {
  return (
    <>
    {/* Section */}
  	<div className="section">
      {/* Container */}
      <Container>
        {/* Row */}
        <Row>
          <Col md="8">
            <PostRow />
  					<div className="section-row loadmore text-center">
  						<a href="#" className="primary-button">Load More</a>
  					</div>
          </Col>

          <Col md="4">
            <AdWidget />
            <SocialWidget />
            <CategoryWidget />
            <NewsletterWidget />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default AuthorPage;
