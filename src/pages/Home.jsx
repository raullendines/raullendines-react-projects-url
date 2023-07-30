/* eslint-disable react/prop-types */
import { Link } from '../router/Link.jsx';
import useLanguage from '../js/services/languages.js';
import { homePage } from '../js/services/languages.js'; // Import homePage object

export default function HomePage({ routeParams = {} }) {
  const i18n = useLanguage(routeParams.lang ?? 'es', homePage);

  return (
    <div>
      <h1>{i18n.title}</h1>
      <div>
        <p>{i18n.description}</p>
        <Link to='/about'>{i18n.button}</Link>
      </div>
    </div>
  );
}
