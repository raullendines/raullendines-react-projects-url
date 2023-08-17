import { useParams } from 'react-router-dom';
import useLanguage, { aboutPage } from '../js/services/languages.js';
export default function AboutPage() {

  const { lang } = useParams();
  const i18n = useLanguage(lang ?? 'es', aboutPage);


  return (
    <div className='h-max'>
      <h1>{i18n.title}</h1>
      <div>
        <p>{i18n.desciption}</p>
      </div>
    </div>
  );
}