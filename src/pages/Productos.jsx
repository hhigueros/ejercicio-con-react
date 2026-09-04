import { useState } from 'react';
import { PRODUCTOS, CATEGORIAS } from '../datos.js';
import TarjetaProducto from '../components/TarjetaProducto.jsx';
import { useTitulo } from '../hooks/useTitulo.js';

export default function Productos() {
  useTitulo('Productos');

  // 1. El estado: qué categoría está seleccionada
  const [categoria, setCategoria] = useState('Todos');

  // 2. Estado derivado: la lista filtrada se CALCULA, no se guarda
  const visibles =
    categoria === 'Todos'
      ? PRODUCTOS
      : PRODUCTOS.filter((p) => p.categoria === categoria);

  return (
    <div className="contenedor seccion">
      <h2>Nuestro catálogo</h2>
      <p className="seccion__intro">
        {visibles.length} producto{visibles.length === 1 ? '' : 's'} disponible
        {visibles.length === 1 ? '' : 's'}.
      </p>

      {/* 3. Los botones de filtro */}
      <div className="filtros">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat}
            type="button"
            className={cat === categoria ? 'filtro activo' : 'filtro'}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 4. La lista, o el mensaje de vacío */}
      {visibles.length > 0 ? (
        <div className="rejilla">
          {visibles.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <p className="vacio">No hay productos en esta categoría.</p>
      )}
    </div>
  );
}
