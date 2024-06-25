import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

// import project images here
import pwaTextEditor from "../assets/images/pwaTextEditor.png";
import datasnake from "../assets/images/datasnake.png";
import timedQuiz from "../assets/images/timedQuiz.png";
import sqlEmployeeTracker from "../assets/images/sqlEmployeeTracker.png";
import ormEcommerce from "../assets/images/ormEcommerce.png";
import practiceWebpage from "../assets/images/practicewebpage.png";

export const Projects = () => {
    const projects = [
        {
            title: "PWA Text Editor",
            description: "Text editor that can be used offline and uses IndexedDB api to store and retrieve data.",
            imageUrl: pwaTextEditor,
        },
        {
            title: "SQL Employee Tracker",
            description: "A web application that uses the terminal to modify and view an employee database",
            imageUrl: sqlEmployeeTracker,
        },
        {
            title: "ORM E-commerce",
            description: "Web application that uses front and backend to successfully perform CRUD operations on a company's e-commerce database.",
            imageUrl: ormEcommerce,
        },
        {
            title: "DataSnake",
            description: "Backend snake game application created as a group project that utilizes: JS, Handlebars, MySql, bcrypt, and animeJS technologies.",
            imageUrl: datasnake ,
        },
        {
            title: "Timed Quiz",
            description: "Web application that uses JS Dom methods, event delegation and web api storage to store a user's quiz store.",
            imageUrl: timedQuiz,
        },
        {
            title: "Practice Webpage",
            description: "First website I ever created using only HTML and CSS.",
            imageUrl: practiceWebpage,
        },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>This is a collection of all projects that I have completed during my coding bootcamp journey.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"></Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                    key ={index}
                                                    {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Second</Tab.Pane>
                            <Tab.Pane eventKey="third">Third</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}