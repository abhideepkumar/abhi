import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Skills from './components/skills';
import Project from './components/project';
import Contact from './components/contact';
import Services from './components/Services';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="skills" element={<Skills />}></Route>
          <Route exact path="services" element={<Services />}></Route>
          <Route exact path="project" element={<Project />}></Route>
          <Route exact path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
