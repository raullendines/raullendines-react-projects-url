import { Suspense, lazy } from "react";

import Route from "./router/Route";
import Router from "./router/Router";

//De esta forma no renderizará paginas no usadas y mejorara el rendimiento
const HomePage = lazy(() => import('./pages/Home.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))
const MoviePage = lazy(() => import('./pages/MoviePage.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const TicTacToe = lazy(() => import('./pages/TicTacToe.jsx'))

const routes = [

  {
    path: '/search/:query',
    Component: SearchPage
  },
  {
    path: '/:lang/',
    Component: HomePage
  },
 ]

function App() {
  
  return (    
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaujltComponent={NotFound}>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/about' Component={AboutPage}></Route>
          <Route path='/movies' Component={MoviePage}></Route>
          <Route path='/tictactoe' Component={TicTacToe}></Route>

        </Router>
      </Suspense>
    </main>
  );
}

export default App;
