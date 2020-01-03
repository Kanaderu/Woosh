import React from "react";

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
} from "reactstrap";

import { BlogIndexAPI } from '../types/BlogIndexAPI'

// core components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

type BlogIndexProps = {
  // using `interface` is also ok
  message: string;
};

type BlogIndexState = {
  count: number; // like this
  api: BlogIndexAPI | null;
};

//function BlogPosts() {
class BlogIndex extends React.Component<BlogIndexProps, BlogIndexState> {
  state: BlogIndexState = {
    // optional second annotation for better type inference
    count: 0,
    api: null
  };

  public componentDidMount() {
    this.setState(state => ({count: 3}));
    fetch('http://localhost:8000/api/blog/')
      .then(response => response.json())
      .then(response => this.setState({api: response}));
  };

  public render() {
    console.log("state is " + this.state.count);
    console.log("API is ");
    console.log(this.state);
    document.documentElement!.classList.remove("nav-open");
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

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
                {this.state.api != null && this.state.api.items.map((post, key) =>
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
                            <a href={"#"+post.meta.detail_url}>
                              <CardTitle tag="h3">
                                {post.title}
                              </CardTitle>
                              <h6 className="title-uppercase">{post.date}</h6>
                            </a>
                            <div className="card-description">
                              <p>{post.intro}</p>
                            </div>
                          </CardBody>
                          <a href={"#"+post.meta.detail_url}>
                            <Button className="btn-round" color="danger" size="sm">
                              Read more
                            </Button>
                          </a>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )
                }
                <hr />
                <br />
                <br />
                <div className="article">
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
                          <a href="javascrip: void(0);">
                            <CardTitle tag="h3">
                              You Should Get Excited About Virtual Reality.
                            </CardTitle>
                            <h6 className="title-uppercase">October 20, 2016</h6>
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
                <hr />
                <br />
                <br />
                <div className="article">
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("../assets/img/sections/leonard-cotte.jpg")}
                          />
                          <p className="image-thumb">Photo by Cam Adams</p>
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="warning">
                            Trending
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            Make Somebody Nervous Before You Die
                          </CardTitle>
                          <h6 className="title-uppercase">October 20, 2016</h6>
                        </a>
                        <div className="card-description">
                          <p>
                            You won’t find many concepts that are very useful or
                            important if you insist on having a worldview that’s
                            void of controversy, invulnerable to criticism, and
                            incapable of making others feel confused...
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </div>
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
  }
}

export default BlogIndex;
