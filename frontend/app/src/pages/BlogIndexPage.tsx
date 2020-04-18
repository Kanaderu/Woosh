import React from 'react';

import PostHot from '../components/sections/PostHot';
import PostCard from '../components/sections/PostCard';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

const BlogPage: React.FC<{}> = () => {
  return (
    <>
    {/* Section */}
  	<div className="section">
      {/* Container */}
      <Container>
        {/* Row */}
        <Row style={{marginBottom: "30px"}}>
          <Col md="8">
            {/* left hot-post */}
            <Row md="12" style={{paddingRight: 2}}>
              <PostHot />
            </Row>
          </Col>
          <Col md="4">
            {/* right hot-post */}
            <Row md="6" style={{paddingLeft: 2, paddingBottom: 1}}>
              <PostHot />
            </Row>
            <Row md="6" style={{paddingLeft: 2, paddingTop: 1}}>
              <PostHot />
            </Row>
          </Col>
        </Row>

        <Row>
          <div className="section-title">
            <h2 className="title">Recent Posts</h2>
          </div>
        </Row>

        <Row>
          <Col md="4">
            <PostCard />
          </Col>
          <Col md="4">
            <PostCard />
          </Col>
          <Col md="4">
            <PostCard />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default BlogPage;
