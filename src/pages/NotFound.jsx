import { Link } from "../router/Link";

const NotFound = () => {
  return (
    <div className="parent-container">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to='/' >Volver la la pagina principal</Link>
    </div>
  );
};

export default NotFound;
