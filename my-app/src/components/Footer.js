import { Container, Row, Col } from 'react-bootstrap';
import github from '../assets/images/github.svg';
import linkedIn from '../assets/images/linkedIn.svg';
import stackOverflow from '../assets/images/stackOverflow.svg';

export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                {/* className="align-item-center" */}
                <Row >
                    {/* text-center  */}
                    <Col sm={6} className="text-sm-end">
                        <div className="social-icon">
                            <a href="github.com/sandyvzqz"><img src={github} alt="github logo"/></a>
                            <a href="linkedin.com"><img src={linkedIn} alt="linkedIn logo"/></a>
                            <a href="stackoverflow.com"><img src={stackOverflow} alt="stackOverflow logo"/></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}