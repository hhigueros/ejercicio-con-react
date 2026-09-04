import { Link } from 'react-router-dom';
import { PRODUCTOS, BENEFICIOS } from '../datos.js';
import TarjetaProducto from '../components/TarjetaProducto.jsx';
import { useTitulo } from '../hooks/useTitulo.js';

export default function Inicio() {
  // Estado derivado: filtramos los destacados en el momento
  const destacados = PRODUCTOS.filter((p) => p.destacado);

  return (
    <>
      {/* ---------- Portada ---------- */}
      <header className="hero">
        <span className="hero__etiqueta">Tueste artesanal</span>
        <h1>Café que nace en casa</h1>
        <p>
          Granos de altura seleccionados en fincas guatemaltecas y tostados cada
          semana por manos locales.
        </p>
        <Link className="boton" to="/productos">
          Ver productos
        </Link>
      </header>

      {/* ---------- Beneficios ---------- */}
      <section className="contenedor seccion">
        <h2>Por qué Raíz</h2>
        <p className="seccion__intro">
          Trabajamos directo con las familias productoras, sin intermediarios.
        </p>

        <div className="rejilla">
          {BENEFICIOS.map((b) => (
            <article key={b.id} className="beneficio">
              <span className="beneficio__icono" aria-hidden="true">
                {b.icono}
              </span>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Destacados ---------- */}
      <section className="contenedor seccion">
        <h2>Nuestros favoritos</h2>
        <p className="seccion__intro">Los dos que más nos piden.</p>

        <div className="rejilla">
          {destacados.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>

        <p style={{ marginTop: '2rem' }}>
          <Link className="boton boton--borde" to="/productos">
            Ver todo el catálogo
          </Link>
        </p>
      </section>
    </>
  );
}
