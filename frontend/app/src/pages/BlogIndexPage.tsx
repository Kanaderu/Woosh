import React from 'react';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

import PostHot from '../components/sections/PostHot';
import PostCard from '../components/sections/PostCard';

import { BlogIndexDataAPI } from '../types/BlogIndexAPI';

export interface BlogPageProps  {
  posts: BlogIndexDataAPI[];
}

const BlogPage: React.FC<BlogPageProps> = ({posts}) => {

  return (
    <>
  	<div className="section">
      <Container style={{maxWidth: "1280px"}}>
        {/* left hot-post */}
        <Row style={{marginBottom: "30px"}}>
          {posts.length > 0 &&
          <Col md="8">
            <Row md="12" style={{paddingRight: 2}}>
              <PostHot post={posts[0]} />
            </Row>
          </Col>
          }
          {/* right hot-post */}
          <Col md="4">
            <Row style={{paddingLeft: 2, paddingBottom: 1}}>
              {posts.length > 1 && <PostHot post={posts[1]}/>}
            </Row>
            <Row style={{paddingLeft: 2, paddingTop: 1}}>
              {posts.length > 2 && <PostHot post={posts[2]}/>}
            </Row>
          </Col>
        </Row>

        {posts.length > 3 &&
        <Row>
          <div className="section-title">
            <h2 className="title">Recent Posts</h2>
          </div>
        </Row>
        }

        <Row>
          {posts.map((post, key) =>
            key > 2 && <PostCard key={key} post={post} />
          )}
        </Row>
      </Container>
    </div>
    </>
  );
}

export default BlogPage;
