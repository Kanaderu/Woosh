import React from "react";

// reactstrap components
import { Badge, Button, Card, Media, Container, Row, Col } from "reactstrap";

import johnTower from '../assets/img/sections/john-towner.jpg';
import danielOlahs from '../assets/img/sections/daniel-olahs.jpg';
import sebastienGabrieles from '../assets/img/sections/sebastien-gabrieles.jpg';

import useGetBlogPostService from '../api/useGetBlogPostService';

import CodeBlock from '../components/Block/CodeBlock';
import HeadingBlock from '../components/Block/HeadingBlock';
import ImageBlock from '../components/Block/ImageBlock';
import ParagraphBlock from '../components/Block/ParagraphBlock';
import HTMLBlock from '../components/Block/HTMLBlock';
import EmbedBlock from '../components/Block/EmbedBlock';
import MarkdownBlock from '../components/Block/MarkdownBlock';
import TableBlock from '../components/Block/TableBlock';

// core components
//import ColorNavbar from "components/Navbars/ColorNavbar.js";
//import Header from '../components/Header/Header';
import BlogPostHeader from '../components/Header/BlogPostHeader';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

interface BlogPostProps {
  // use props.match.params.id from dynamic Route
  match: {
    params: {
      id: number
    }
  }
};

const BlogPost: React.FC<BlogPostProps> = (props) => {

  const service = useGetBlogPostService(props.match.params.id);
  console.log(service)

  document.documentElement!.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  });

  return (
    <>
      <Navbar />
      {service.status === 'loaded' &&
       <BlogPostHeader
          title={service.payload.title}
          subtitle={service.payload.subtitle}
          backgroundImage={service.payload.header_image.url}
        /> }
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
            {/*
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>A place for storytelling</h2>
                  <h3 className="title-uppercase">
                    <small>Written by designers for designers</small>
                  </h3>
                </Col>
              </Row>
            */}
              <Row>
              {/*
                <Col className="ml-auto mr-auto" md="10">
                  <div className="text-center">
                    <Badge className="main-tag" color="warning">
                      Trending
                    </Badge>
                    <a href="javascrip: void(0);">
                      <h3 className="title">
                        Make Somebody Nervous Before You Die
                      </h3>
                    </a>
                    <h6 className="title-uppercase">October 10, 2016</h6>
                  </div>
                </Col>
              */}
                <Col className="ml-auto mr-auto" md="8">
                {/*
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" + danielOlahs + ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by Cam Adams
                    </p>
                  </a>
                */}
                  <div className="article-content">
                    {
                      service.status == 'loaded' &&
                      service.payload.body.map((section, key) =>
                        <div key={key}>
                        { section.type === 'heading' &&
                          <HeadingBlock center={ true } value={"<h1>"+section.value+"</h1>"} />
                        }

                        { section.type === 'image' &&
                          <ImageBlock center={ true } src={ section.value.url } alt={ section.value.title } />
                        }

                        { section.type === 'embedded_content' &&
                          <EmbedBlock center={ true } value={ section.value } />
                        }

                        { section.type === 'paragraph' &&
                          <ParagraphBlock value={ section.value } />
                        }

                        { section.type === 'html' &&
                          <HTMLBlock value={ section.value } />
                        }

                        { section.type === 'table' &&
                          <TableBlock value={ section.value }/>
                        }

                        { section.type === 'markdown' &&
                          <MarkdownBlock value={ section.value } />
                        }

                        { section.type === 'code' &&
                          <div>
                            <CodeBlock
                              language={ section.value.language }
                              value={ section.value.code }
                            />
                          </div>
                        }

                        {/*
                        { section.type }<br />
                        { JSON.stringify(section.value) }<br />
                        { section.type }<br /><br />
                        */}
                        </div>
                      )
                    }
                  </div>
                  <br />
                  <div className="article-footer">
                    <Container>
                      <Row>
                        <Col md="6">
                          <h5>Tags:</h5>
                          <label className="label label-default mr-1">
                            Motivational
                          </label>
                          <label className="label label-default mr-1">
                            Newsletter
                          </label>
                          <Badge color="warning">Trending</Badge>
                        </Col>
                        <Col className="ml-auto" md="4">
                          <div className="sharing">
                            <h5>Spread the word</h5>
                            <Button
                              className="btn-just-icon mr-1"
                              color="twitter"
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-just-icon mr-1"
                              color="facebook"
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button className="btn-just-icon" color="google">
                              <i className="fa fa-google" />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <hr />
                  <Container>
                   {/*
                    <Row>
                      <Media>
                        <a
                          className="pull-left"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <div className="avatar big-avatar">
                            <Media
                              alt="..."
                              object
                              src={require("../assets/img/faces/kaci-baum-2.jpg")}
                            />
                          </div>
                        </a>
                        <Media body>
                          <Media heading>Sophie Banks</Media>
                          <div className="pull-right">
                            <Button
                              className="btn-round"
                              color="default"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fa fa-reply mr-1" />
                              Follow
                            </Button>
                          </div>
                          <p>
                            Hello guys, nice to have you on the platform! There
                            will be a lot of great stuff coming soon. We will
                            keep you posted for the latest news.
                          </p>
                          <p>Don't forget, You're Awesome!</p>
                        </Media>
                      </Media>
                    </Row>
                    <Row>
                      <div className="comments media-area">
                        <h3 className="text-center">Comments</h3>
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={require("../assets/img/faces/clem-onojeghuo-3.jpg")}
                              />
                            </div>
                          </a>
                          <Media body>
                            <Media heading tag="h5">
                              John Lincoln
                            </Media>
                            <div className="pull-right">
                              <h6 className="text-muted">Sep 11, 11:54 AM</h6>
                              <Button
                                className="btn-link pull-right"
                                color="info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-reply mr-1" />
                                Reply
                              </Button>
                            </div>
                            <p>
                              Hello guys, nice to have you on the platform!
                              There will be a lot of great stuff coming soon. We
                              will keep you posted for the latest news.
                            </p>
                            <Media>
                              <a
                                className="pull-left"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <div className="avatar">
                                  <Media
                                    alt="..."
                                    object
                                    src={require("../assets/img/faces/clem-onojeghuo-2.jpg")}
                                  />
                                </div>
                              </a>
                              <Media body>
                                <Media heading tag="h5">
                                  Erik P.
                                </Media>
                                <div className="pull-right">
                                  <h6 className="text-muted">
                                    Sep 11, 11:56 AM
                                  </h6>
                                  <Button
                                    className="btn-link pull-right"
                                    color="info"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    <i className="fa fa-reply mr-1" />
                                    Reply
                                  </Button>
                                </div>
                                <p>
                                  Hello guys, nice to have you on the platform!
                                  There will be a lot of great stuff coming
                                  soon. We will keep you posted for the latest
                                  news.
                                </p>
                                <p>Don't forget, You're Awesome!</p>
                              </Media>
                            </Media>

                          </Media>
                        </Media>

                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={require("../assets/img/faces/joe-gardner-2.jpg")}
                              />
                            </div>
                          </a>
                          <Media body>
                            <Media heading tag="h5">
                              Joe
                            </Media>
                            <div className="pull-right">
                              <h6 className="text-muted">Sep 11, 11:57 AM</h6>
                              <Button
                                className="btn-link pull-right"
                                color="info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-reply mr-1" />
                                Reply
                              </Button>
                            </div>
                            <p>
                              Hello guys, nice to have you on the platform!
                              There will be a lot of great stuff coming soon. We
                              will keep you posted for the latest news.
                            </p>
                            <p>Don't forget, You're Awesome!</p>
                          </Media>
                        </Media>

                      </div>
                    </Row>
                    */}
                  </Container>
                </Col>
              </Row>
              <Row>
                {/*
                <div className="related-articles">
                  <h3 className="title">Related articles</h3>
                  <legend />
                  <Container>
                    <Row>
                      <Col md="4">
                        <a href="pkp">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("../assets/img/sections/damir-bosnjak.jpg")}
                          />
                        </a>
                        <p className="blog-title">
                          My Review of Pitchfork’s ‘Indie 500’ Album Review
                        </p>
                      </Col>
                      <Col md="4">
                        <a href="pkp">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("../assets/img/sections/por7o.jpg")}
                          />
                        </a>
                        <p className="blog-title">Top Events This Month</p>
                      </Col>
                      <Col md="4">
                        <a href="pkp">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("../assets/img/sections/jeff-sheldon.jpg")}
                          />
                        </a>
                        <p className="blog-title">
                          You Should Get Excited About Virtual Reality. Here’s
                          Why.
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                */}
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPost;
