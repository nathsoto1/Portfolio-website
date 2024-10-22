import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio website!</p>
        <nav>
          <ul>
            <li className="side-bars"><a href="#about">About Me</a></li>
            <li className="side-bars"><a href="#projects">Projects</a></li>
            <li className="side-bars"><a href="#contact">Contact</a></li>
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
      </footer>
    </div>
  );
}

export default App;
