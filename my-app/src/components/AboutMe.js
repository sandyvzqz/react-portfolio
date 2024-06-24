import { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import headerImg from '../assets/images/mountains.png';

export const About = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["About Me"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300- Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
    return (
    <section className="about" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline"> Sandy V. Portfolio</span>
                    <h1>{`Portfolio`}<span className="wrap"> {text} </span></h1>
                    <p> This is a section about me. Remember to include a picture and a short description about me.</p>
                    <button onClick={() => console.log('connect')}>Contact ME <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    {/* <img src={headerImg} alt="header image"/> */}
                </Col>
            </Row>
        </Container>
    </section>
    );
}