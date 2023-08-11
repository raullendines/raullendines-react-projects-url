import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import AboutPage from './pages/About.jsx';
import MoviePage from './pages/MoviePage.jsx';
import SearchPage from './pages/Search.jsx';
import TicTacToe from './pages/TicTacToe.jsx';
import ProjectsPage from './pages/Projects.jsx';
import SingleProjectPage from './pages/SingleProject.jsx';

import './styles.css';
import Nav from './components/Nav.jsx';
import EnterPassword from './components/EnterPassword.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col max-w-900">
        <div>
          <Nav />
        </div>

        <div className="flex-grow">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/:lang/" element={<HomePage />} />
              <Route path="/:lang/about" element={<AboutPage />} />
              <Route path="/:lang/projects" element={<ProjectsPage />} />
              <Route path="/:lang/movies" element={<MoviePage />} />
              <Route path="/:lang/search/:query" element={<SearchPage />} />
              <Route path="/:lang/tictactoe" element={<TicTacToe />} />
              <Route path="/:lang/*" element={<NotFound />} />
              <Route path="/:lang/projects/:projectId" element={<SingleProjectPage />} />

            </Routes>
          </Suspense>
        </div>

        {/*<EnterPassword/>*/}
      </div>
    </Router>
  );
}

export default App;
