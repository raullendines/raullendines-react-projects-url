// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import AboutPage from './pages/About.jsx';
import MoviePage from './pages/MoviePage.jsx';
import SearchPage from './pages/Search.jsx';
import TicTacToe from './pages/TicTacToe.jsx';


function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            <Route path='/:lang/' element={<HomePage />} />
            <Route path='/:lang/about' element={<AboutPage />} />
            <Route path='/:lang/movies' element={<MoviePage />} />
            <Route path='/:lang/search/:query' element={<SearchPage />} />
            <Route path='/:lang/tictactoe' element={<TicTacToe />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
