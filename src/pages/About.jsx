import { Link } from '../router/Link.jsx'

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <div>
        <p>Esta es una pagina about</p>
        <Link to='/'> Ir al home </Link>
      </div>
      
    </div>  
  );
}