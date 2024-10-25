import './App.css';
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import React from 'react';


function App() {
  return (
    <div className="App">
      <NavBar />
     <Banner />
     {/* <header className="App-header">
        <h1>Nathan's Portfolio</h1>
        <p>Welcome to Nathan's portfolio website!</p>
        <nav>
          <ul>
            <li><a href="#about" className="side-bars">About Me</a></li>
            <li><a href="#projects" className="side-bars">Projects</a></li>
            <li><a href="#contact" className="side-bars">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Insert your bio here.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>List your projects here.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Provide your contact information here.</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>  */}
    </div>
  );
}

export default App;
