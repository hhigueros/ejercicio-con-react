import { NavLink } from 'react-router-dom';
import { ENLACES } from '../datos.js';

export default function NavBar() {
  return <nav className="navbar" aria-label="Navegación principal">
    <NavLink to="/" className="navbar__marca"><span>PA</span> Página Abierta</NavLink>
    <ul className="navbar__links">
      {ENLACES.map((e) => <li key={e.id}><NavLink to={e.ruta} end={e.ruta === '/'} className={({isActive}) => isActive ? 'activo' : ''}>{e.texto}</NavLink></li>)}
    </ul>
  </nav>;
}