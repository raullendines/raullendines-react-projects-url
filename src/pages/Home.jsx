import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { homePage } from '../js/services/languages.js';
import useLanguage from '../js/services/languages.js';

export default function HomePage() {
  
  const { lang } = useParams();
  const i18n = useLanguage(lang ?? 'es', homePage);

  return (
    <div>
      <h1>{i18n.title}</h1>
      <div>
        <p>{i18n.description}</p>
        <Link to='/es/about'>{i18n.button}</Link>
        <Link to='/es/movies'>movies</Link>
        <Link to='/es/tictactoe'>tictactoe</Link>

      </div>
    </div>
  );
}
