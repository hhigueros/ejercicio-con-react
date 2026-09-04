import { Link } from 'react-router-dom';

export default function TarjetaProducto({ producto }) {
  return (
    <Link to={`/productos/${producto.id}`} className="tarjeta">
      <span className="tarjeta__emoji" aria-hidden="true">
        {producto.emoji}
      </span>

      <span className="tarjeta__categoria">{producto.categoria}</span>

      <h3>{producto.nombre}</h3>
      <p>{producto.resumen}</p>

      <span className="tarjeta__precio">Q{producto.precio}</span>
    </Link>
  );
}
