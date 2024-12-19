import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;