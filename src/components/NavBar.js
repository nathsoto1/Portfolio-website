import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import githubIcon from '../assets/githubicon.png';
import linkedinIcon from '../assets/linkedinicon.webp'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Nathan's Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Skills</Nav.Link>
            <Nav.Link href="#about-me">Projects</Nav.Link>
          </Nav>
          <span className="navbar-icons">
            <div>
              <a href="https://github.com/nathsoto1" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github"></img>
              </a>
              <a href="https://www.linkedin.com/in/nathan-soto-49224825a/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="linkedin" variant="outline-light" href></img>
              </a>
            </div>
          </span>
          <Button
            variant="outline-light"
            href="https://docs.google.com/document/d/1d77y7ZqShngDqaq22n1TZxiIrYDMpn4sJMjA0hrqlkM/edit?usp=sharing"
            target="_blank"
            className="ms-3"
          >
            Resume
          </Button>
        </Container>
      </Navbar>  
  )
}
export default NavBar;