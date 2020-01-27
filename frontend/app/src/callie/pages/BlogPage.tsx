import React from 'react';

import PostShare from '../components/sections/PostShare';
import PostContent from '../components/sections/PostContent';
import PostAuthor from '../components/sections/PostAuthor';
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
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import '../../../assets/callie/css/style.css';

//<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CMuli:400,700" rel="stylesheet">
const BlogSection: React.FC<{}> = () => {
  return (
    <>
    {/* Section */}
  	<div className="section">
      {/* Container */}
      <div className="container">
        {/* Row */}
        <div className="row">
          <div className="col-md-8">
            <PostShare />
            <PostContent />
            <PostAuthor />
            <RelatedPost />
            <PostComments />
            <PostReply />
          </div>


          <div className="col-md-4">
            <AdWidget />
            <SocialWidget />
            <CategoryWidget />
            <NewsletterWidget />
            <PostWidget />
            <GalleryWidget />
            <AdWidget />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BlogSection;
