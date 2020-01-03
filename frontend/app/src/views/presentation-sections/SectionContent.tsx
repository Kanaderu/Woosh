import React from "react";

import ipadContent from '../../assets/img/presentation-page/ipad-content-2.png';
import ipadLeft from '../../assets/img/presentation-page/ipad-left-img.jpg';
import ipadRight from '../../assets/img/presentation-page/ipad-right-img.jpg';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionContent() {
  return (
    <>
      <div id="fadeInAnim">
        <div className="section section-content section-gray">
          <Container>
            <Row>
              <Col md="7">
                <div className="image-container">
                  <img
                    alt="..."
                    className="img"
                    src={ipadContent}
                  />
                  <img
                    alt="..."
                    className="area-img add-animation"
                    src={ipadLeft}
                  />
                  <img
                    alt="..."
                    className="info-img add-animation"
                    src={ipadRight}
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="section-description">
                  <h3 className="title">Content Areas</h3>
                  <h6 className="category">For Areas that Need More Space</h6>
                  <h5 className="description">
                    We took into consideration multiple use cases and came up
                    with some specific elements for you. If you need elements
                    such as tables, comments, description areas, tabs and many
                    others, we've got you covered. They're beautiful and easy to
                    use for the end user navigating your website.
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionContent;
