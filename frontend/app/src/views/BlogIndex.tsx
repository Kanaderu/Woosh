import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

import ColorNavbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import SectionButtons from './index-sections/SectionButtons';
import SectionNavigation from './index-sections/SectionNavigation';
import SectionNavbars from "./index-sections/SectionNavbars";
import SectionPreFooterAreas from "./index-sections/SectionPreFooterAreas";
import SectionFooterAreas from "./index-sections/SectionFooterAreas";
import SectionDescriptionAreas from "./index-sections/SectionDescriptionAreas";
import SectionTypography from "./index-sections/SectionTypography";
import SectionNotification from "./index-sections/SectionNotification";
import SectionTables from "./index-sections/SectionTables";
import SectionComments from "./index-sections/SectionComments";
import SectionCommentsAreaSmall from "./index-sections/SectionCommentsAreaSmall";
//import SectionJavaScript from "./index-sections/SectionJavaScript";
import SectionCards from "./index-sections/SectionCards";

//import Headroom from 'react-headroom'
/*
// core components
import IndexHeader from "components/Headers/IndexHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";
// sections for this page
import SectionButtons from "./index-sections/SectionButtons.js";
import SectionNavigation from "./index-sections/SectionNavigation.js";
import SectionNavbars from "./index-sections/SectionNavbars.js";
import SectionPreFooterAreas from "./index-sections/SectionPreFooterAreas.js";
import SectionFooterAreas from "./index-sections/SectionFooterAreas.js";
import SectionDescriptionAreas from "./index-sections/SectionDescriptionAreas.js";
import SectionTypography from "./index-sections/SectionTypography.js";
import SectionNotification from "./index-sections/SectionNotification.js";
import SectionTables from "./index-sections/SectionTables.js";
import SectionComments from "./index-sections/SectionComments.js";
import SectionCommentsAreaSmall from "./index-sections/SectionCommentsAreaSmall.js";
import SectionJavaScript from "./index-sections/SectionJavaScript.js";
import SectionCards from "./index-sections/SectionCards.js";
*/

type BlogIndexProps = {
  // using `interface` is also ok
  message: string;
};

type BlogIndexState = {
  count: number; // like this
};

class BlogIndex extends React.Component<BlogIndexProps, BlogIndexState> {
  state: BlogIndexState = {
    // optional second annotation for better type inference
    count: 0
  };

  public componentDidMount() {
    this.setState(state => ({count: 3}));
  };


  public render() {
    console.log("state is " + this.state.count)
    return (
    <>
      <ColorNavbar />
      <Header />
    </>
    );
  };
}

export default BlogIndex;