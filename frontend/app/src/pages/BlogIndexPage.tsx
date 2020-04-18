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
  	<div className="section">
      <Container>
        {/* left hot-post */}
        <Row style={{marginBottom: "30px"}}>
          <Col md="8">
            <Row md="12" style={{paddingRight: 2}}>
              <PostHot />
            </Row>
          </Col>

          {/* right hot-post */}
          <Col md="4">
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
          <PostCard blogIndex={0} />
          <PostCard blogIndex={1}/>
          <PostCard blogIndex={2}/>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default BlogPage;
