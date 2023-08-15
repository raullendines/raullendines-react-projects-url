
import React from 'react';
import { useParams } from 'react-router-dom';
import useLanguage, { homePage } from '../js/services/languages.js';
import TypingEffect from "../components/TypingEffect.jsx";

export default function HomePage() {
  const { lang } = useParams();
  const i18n = useLanguage(lang ?? 'es', homePage);
  
  return (
    <div className="center-parent">
      <div>
        <h1 className='home-title-text'>{i18n.title}</h1>
        <div className='home-typewriter-text'>
          <TypingEffect array={i18n.typewriter}/>
        </div>
        <p className='home-paragraph-text'>{i18n.paragraph}</p>
      </div>
    </div>
  );
}
