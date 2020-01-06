import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

import gerritVermeulen from '../../assets/img/sections/gerrit-vermeulen.jpg';

// core components

type BlogPostHeaderProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = (props) => {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" + props.backgroundImage + ")"
        }}
      >
        {/*<div className="filter filter-danger" /> */}
        <div className="content-center">
          <Container>
            <h1>
              {props.title}
            </h1>
            <h3>{props.subtitle}</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

BlogPostHeader.defaultProps = {
  backgroundImage: gerritVermeulen,
  subtitle: ""
};

export default BlogPostHeader;
