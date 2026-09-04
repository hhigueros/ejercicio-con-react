import { NavLink } from 'react-router-dom';
import { ENLACES } from '../datos.js';

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__marca">
        🌱 Raíz
      </NavLink>

      <ul className="navbar__links">
        {ENLACES.map((enlace) => (
          <li key={enlace.id}>
            <NavLink
              to={enlace.ruta}
              end={enlace.ruta === '/'}
              className={({ isActive }) => (isActive ? 'activo' : '')}
            >
              {enlace.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
