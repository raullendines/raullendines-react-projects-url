import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import AboutPage from './pages/About.jsx';
import MoviePage from './pages/MoviePage.jsx';
import SearchPage from './pages/Search.jsx';
import TicTacToe from './pages/TicTacToe.jsx';
import ProjectsPage from './pages/Projects.jsx';
import SingleProjectPage from './pages/SingleProject.jsx';

import './styles.css';
import Nav from './components/Navbar/Nav.jsx';

function App() {
  
  return (
    <>
      <div className="flex flex-col max-w-900">
        <div>
          <Nav languages={['en', 'es', 'ca']} />
        </div>

        <div className="flex-grow">
          <HomePage/>
          <AboutPage/>
          <ProjectsPage/>
        </div>
      </div>
    </>
   
  );
}

export default App;
