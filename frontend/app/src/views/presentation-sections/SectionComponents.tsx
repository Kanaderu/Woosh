import React from "react";

import laptop from '../../assets/img/presentation-page/laptop-basic.png';
import table from '../../assets/img/presentation-page/table.jpg';
import shareBtn from '../../assets/img/presentation-page/share-btn.png';
import colouredCardBtn from '../../assets/img/presentation-page/coloured-card-with-btn.png';
import colouredCard from '../../assets/img/presentation-page/coloured-card.png';
import socialRow from '../../assets/img/presentation-page/social-row.png';
import pinBtn from '../../assets/img/presentation-page/pin-btn.png';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionComponents() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={laptop}
              />
              <img
                alt="..."
                className="table-img"
                src={table}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={shareBtn}
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src ={colouredCardBtn}
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={colouredCard}
              />
              <img
                alt="..."
                className="social-img"
                src={socialRow}
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={pinBtn}
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">Basic Components</h3>
              <h6 className="category">The core elements of your website</h6>
              <h5 className="description">
                We re-styled every Bootstrap 4 element to match the Paper Kit
                style. All the Bootstrap 4 components that you need in a
                development have been re-design with the new look. Besides the
                numerous basic elements, we have also created additional
                classes. All these items will help you take your project to the
                next level.
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SectionComponents;
