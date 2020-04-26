import React, { useState } from 'react';

import CallieNavbar from '../components/navbars/Navbar';
import BlogHeader from '../components/headers/BlogHeader';

import PostShare from '../components/sections/PostShare';
import PostContent from '../components/sections/PostContent';
import PostAuthor from '../components/sections/PostAuthor';
import PostTags from '../components/sections/PostTags';
import PostNav from '../components/sections/PostNav';
import RelatedPost from '../components/sections/RelatedPost';
import PostComments from '../components/sections/PostComments';
import PostReply from '../components/sections/PostReply';

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

import { BlogPostAPI } from '../types/BlogPostAPI';
import useGetBlogPostService from '../api/useGetBlogPostService';

export interface BlogPageProps  {
  id: number
}

const BlogPage: React.FC<BlogPageProps> = ({id}) => {
  var post: BlogPostAPI | null = null;
  const results = useGetBlogPostService(id);

  if(results.status == "loaded"){
    post = results.payload;
    console.log(post);
  } else {
    // handle state while loading
    console.log(results.status)
  }

  if(post != null){
  return (
    <>
    <CallieNavbar>
      <BlogHeader post={post} />
    </CallieNavbar>
    {/* Section */}
  	<div className="section">
      {/* Container */}
      <Container>
        {/* Row */}
        <Row>
          <Col md="8">
            <PostShare />
            <PostContent data={post.body}/>
            <PostTags />
            <PostNav />
            <PostAuthor />
            <RelatedPost />
            <PostComments />
            <PostReply />
          </Col>

          <Col md="4">
            <AdWidget />
            <SocialWidget />
            <CategoryWidget />
            <NewsletterWidget />
            <PostWidget />
            <GalleryWidget />
            <AdWidget />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
  }
  else {
    return (<></>)
  }

}

export default BlogPage;
