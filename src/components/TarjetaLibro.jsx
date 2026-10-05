import { portadaUrl } from '../services/openLibrary.js';

export default function TarjetaLibro({ libro }) {
  const portada = portadaUrl(libro.cover_i);
  return <article className="libro">
    <div className="libro__portada">{portada ? <img src={portada} alt={`Portada de ${libro.title}`} loading="lazy" /> : <span aria-hidden="true">📖</span>}</div>
    <div className="libro__contenido">
      <span className="libro__anio">{libro.first_publish_year || 'Año desconocido'}</span>
      <h3>{libro.title}</h3>
      <p>{libro.author_name?.slice(0,2).join(', ') || 'Autor no disponible'}</p>
      <small>{libro.edition_count ? `${libro.edition_count} ediciones registradas` : 'Ediciones sin registrar'}</small>
    </div>
  </article>;
}