import { useParams, Link } from 'react-router-dom';
import { PRODUCTOS } from '../datos.js';
import { useEffect } from 'react';

export default function Detalle() {
  // 1. Leemos el :id de la URL
  const { id } = useParams();

  // 2. Volvemos arriba al entrar al detalle
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 3. Buscamos el producto
  const producto = PRODUCTOS.find((p) => p.id === Number(id));

  // 4. Si no existe, mostramos un mensaje
  if (!producto) {
    return (
      <div className="contenedor seccion vacio">
        <h2>Producto no encontrado</h2>
        <p>El producto con el código {id} no está en nuestro catálogo.</p>
        <Link className="boton" to="/productos">
          Ver el catálogo
        </Link>
      </div>
    );
  }

  // 5. Si existe, lo mostramos
  return (
    <div className="contenedor seccion">
      <Link className="volver" to="/productos">
        ← Volver al catálogo
      </Link>

      <div className="detalle">
        <div className="detalle__imagen" aria-hidden="true">
          {producto.emoji}
        </div>

        <div>
          <span className="tarjeta__categoria">{producto.categoria}</span>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>

          {producto.notas.length > 0 && (
            <>
              <h3>Notas de sabor</h3>
              <ul className="notas">
                {producto.notas.map((nota) => (
                  <li key={nota}>{nota}</li>
                ))}
              </ul>
            </>
          )}

          <p className="detalle__precio">Q{producto.precio}</p>

          <Link className="boton" to="/contacto">
            Pedir este producto
          </Link>
        </div>
      </div>
    </div>
  );
}