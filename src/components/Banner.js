import {Container, Row, Col} from "react-bootstrap";
import Goku from '../assets/Goku2.png'
import { useState, useEffect } from "react";

export  const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Nathan", "a Software Engineer!", "a student at LSU!"]
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta )

    return () => { clearInterval(ticker)}
  }, [text, delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting) {
      setDelta(75);
    }else {
      setDelta(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return(
    <section className="banner" id="home">
    <Container>
      <Row className="align-items-center">
      <Col xs={12} md={6} xl={7}>
        <span className="tagline">Welcome to my Portfolio</span>
        <h1>{`Hi I'm `}<span className="wrap"> {text}</span></h1>
        <p>Text about me</p>
      </Col>
      <Col xs={12} md={6} xl={5}>
        <img src={Goku} alt="Header Img" />
      </Col> 
      </Row>
    </Container>
    </section>
  )
}
export default Banner;