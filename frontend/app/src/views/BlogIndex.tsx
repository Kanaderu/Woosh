import React from 'react';

import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from 'reactstrap';

import useGetBlogIndexService from '../api/useGetBlogIndexService';

// core components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const BlogIndex: React.FC<{}> = () => {

  const service = useGetBlogIndexService();
  console.log(service);

  document.documentElement!.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  return function cleanup() {
    document.body.classList.remove("blog-post");
  };
});

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>A place for storytelling</h2>
                  <h3 className="title-uppercase">
                    <small>Written by designers for designers</small>
                  </h3>
                </Col>
              </Row>

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("../assets/img/sections/bruno-abatti.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="primary">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            My Review of Pitchfork’s ‘Indie 500’ Album Review
                          </CardTitle>
                        </a>
                        <div className="card-description">
                          <p>
                            In the first sentence of Pitchfork’s review of my
                            collaborative project with 9th Wonder, INDIE 500, a
                            reviewer who is associated with music review site
                            rhapsody.com writes about how I criticize and then
                            distance myself from “celebrity straw men” with the
                            line “celebrities be making money...
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              { service.status === 'loading' &&
                <div className="article" style={{textAlign:'center'}}>
                  <div className="uil-reload-css reload-background mr-1">
                    <div />
                  </div>
                </div>
              }
              { service.status === 'loaded' &&
                service.payload.items.map((post, key) =>
                <div key={key} className="article">
                  {key != 0 && <hr />}
                  {key != 0 && <br />}
                  {key != 0 && <br />}
                  <Row>
                    <Col className="ml-auto mr-auto" md="8">
                      <Card className="card-blog card-plain text-center">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("../assets/img/sections/federico-beccari.jpg")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <div className="card-category">
                            <Badge className="main-tag" color="info">
                              Popular
                            </Badge>
                          </div>
                          <Link to={"/post/" + post.id + "/"}>
                            <CardTitle tag="h3">
                              {post.title}
                            </CardTitle>
                            <h6 className="title-uppercase">{post.date}</h6>
                          </Link>
                          <div className="card-description">
                            <p>{post.intro}</p>
                          </div>
                        </CardBody>
                        <Link to={"/post/" + post.id + "/"}>
                          <Button className="btn-round" color="danger" size="sm">
                            Read more
                          </Button>
                        </Link>
                      </Card>
                    </Col>
                  </Row>
                </div>
              )
              }
              { service.status === 'error' &&
              (
                <div>Error, the backend moved to the dark side.</div>
              )
              }
              <hr />
              <Row>
                <Col md="12">
                  <div className="pull-left">
                    <Button
                      className="btn-link btn-move-left"
                      color="default"
                      size="sm"
                    >
                      <i className="fa fa-angle-left mr-1" />
                      Older Posts
                    </Button>
                  </div>
                  <div className="pull-right">
                    <Button
                      className="btn-link btn-move-right"
                      color="default"
                      size="sm"
                    >
                      Newer Posts <i className="fa fa-angle-right" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogIndex;
