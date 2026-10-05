// src/pages/NoEncontrado.jsx
import { Link } from 'react-router-dom';
import { useTitulo } from '../hooks/useTitulo.js';

export default function NoEncontrado() {
  useTitulo('Página no encontrada');

  return (
    <div className="contenedor seccion vacio">
      <h2>404 · Esta página no existe</h2>
      <p>Puede que el enlace esté mal escrito.</p>
      <Link className="boton" to="/">
        Volver al inicio
      </Link>
    </div>
  );
}
