import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.component';
import './App.css';
import Home from './components/home.component';
import Projects from './components/projects.component';
import About from './components/about.component';
import Contact from './components/contact.component';
import { useState } from 'react';

function App() {

  const [ active, setActive ] = useState(false);


  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar active={active} />} >
          <Route path="/" element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;;
