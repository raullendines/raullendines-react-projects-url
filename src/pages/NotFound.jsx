import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useLanguage, { notFoundPage } from '../js/services/languages.js';

const NotFound = () => {

  const { lang } = useParams();
  const i18n = useLanguage(lang ?? 'es', notFoundPage);


  return (
    <div className="parent-container">
  
      <h1>{i18n.errorText}</h1>
      <p>{i18n.paragraphText}</p>
      <Link to='/' >{i18n.returnText}</Link>
    </div>
  );
};

export default NotFound;
