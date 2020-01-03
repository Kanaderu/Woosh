import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

import gerritVermeulen from '../../assets/img/sections/gerrit-vermeulen.jpg';

// core components

type BlogPostHeaderProps = {
  title: string;
  backgroundImage?: string;
}

function BlogPostHeader(props: BlogPostHeaderProps) {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" + gerritVermeulen + ")"
        }}
      >
        <div className="filter filter-danger" />
        <div className="content-center">
          <Container>
            <h1>
              {props.title}
            </h1>
            <h3>Let us tell you more about what we do.</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BlogPostHeader;
