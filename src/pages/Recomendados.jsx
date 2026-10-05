import { useEffect, useState } from 'react';
import { useTitulo } from '../hooks/useTitulo.js';

export default function Recomendados() {
  useTitulo('Recomendados');
  const [estado, setEstado] = useState({ cargando: true, error: '', libros: [] });

  useEffect(() => {
    const controlador = new AbortController();
    async function cargar() {
      try {
        const respuesta = await fetch('https://openlibrary.org/search.json?q=coffee&limit=6&fields=key,title,author_name,first_publish_year', { signal: controlador.signal });
        if (!respuesta.ok) throw new Error();
        const datos = await respuesta.json();
        setEstado({ cargando: false, error: '', libros: datos.docs || [] });
      } catch (error) {
        if (error.name !== 'AbortError') setEstado({ cargando: false, error: 'No pudimos cargar las recomendaciones. Intenta de nuevo más tarde.', libros: [] });
      }
    }
    cargar();
    return () => controlador.abort();
  }, []);

  return (
    <section className="contenedor seccion">
      <h2>Lecturas para amantes del café</h2>
      <p className="seccion__intro">Además de nuestros productos, te recomendamos libros relacionados con café. Los datos vienen de Open Library.</p>
      {estado.cargando && <div className="vacio"><p>Cargando recomendaciones...</p></div>}
      {!estado.cargando && estado.error && <div className="vacio"><p>{estado.error}</p></div>}
      {!estado.cargando && !estado.error && estado.libros.length === 0 && <div className="vacio"><p>No encontramos recomendaciones en este momento.</p></div>}
      {!estado.cargando && !estado.error && estado.libros.length > 0 && (
        <div className="rejilla">
          {estado.libros.map((libro, i) => (
            <article className="tarjeta" key={libro.key || i}>
              <span className="tarjeta__emoji" aria-hidden="true">📚</span>
              <span className="tarjeta__categoria">{libro.first_publish_year || 'Sin año'}</span>
              <h3>{libro.title}</h3>
              <p>{libro.author_name?.[0] || 'Autor no disponible'}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}