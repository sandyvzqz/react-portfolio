import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import project images here
import pwaTextEditor from "../assets/images/pwaTextEditor.png";
import datasnake from "../assets/images/datasnake.png";
import timedQuiz from "../assets/images/timedQuiz.png";
import sqlEmployeeTracker from "../assets/images/sqlEmployeeTracker.png";
import ormEcommerce from "../assets/images/ormEcommerce.png";
import practiceWebpage from "../assets/images/practiceWebpage.png";

export const Portfolio = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Project Portfolio</h2>
                            <p>Here are a few projects that I have created during my coding bootcamp course.<br>Click on any project to checkout the code!</br></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={ pwaTextEditor } alt="Image"/>
                                    <h5>PWA Text Editor</h5>
                                </div>
                                <div className="item">
                                    <img src={ datasnake } alt="Image"/>
                                    <h5>Data Snake</h5>
                                </div>
                                <div className="item">
                                    <img src={ timedQuiz } alt="Image"/>
                                    <h5>Timed Quiz</h5>
                                </div>
                                <div className="item">
                                    <img src={ sqlEmployeeTracker} alt="Image"/>
                                    <h5>SQL Employee Tracker</h5>
                                </div>
                                <div className="item">
                                    <img src={ ormEcommerce} alt="Image"/>
                                    <h5>ORM E commerce</h5>
                                </div>
                                <div className="item">
                                    <img src={ practiceWebpage} alt="Image"/>
                                    <h5>Practice Webpage</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )  
};