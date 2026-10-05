import { useState } from 'react';
import { useLibros } from '../hooks/useLibros.js';
import { useTitulo } from '../hooks/useTitulo.js';
import TarjetaLibro from '../components/TarjetaLibro.jsx';

export default function Explorar() {
  useTitulo('Explorar');
  const [consulta, setConsulta] = useState('Guatemala');
  const { cargando, error, libros } = useLibros(consulta);

  return <div className="contenedor seccion explorar">
    <div className="encabezado-seccion"><span>OPEN LIBRARY API</span><h1>Busca algo que quieras leer</h1><p>Prueba con un título, un autor o un tema. La búsqueda se actualiza automáticamente.</p></div>
    <label className="buscador"><span aria-hidden="true">⌕</span><input value={consulta} onChange={e=>setConsulta(e.target.value)} placeholder="Ej. astronomía, Borges, diseño..." aria-label="Buscar libros" /><small>{consulta.length}/80</small></label>

    {!consulta.trim() && <div className="estado"><span>⌨️</span><h2>Escribe algo para comenzar</h2><p>Los resultados aparecerán aquí.</p></div>}
    {consulta.trim() && cargando && <div className="estado" role="status"><div className="spinner"></div><h2>Buscando entre los estantes…</h2></div>}
    {consulta.trim() && !cargando && error && <div className="estado estado--error" role="alert"><span>!</span><h2>No pudimos cargar los libros</h2><p>{error}</p></div>}
    {consulta.trim() && !cargando && !error && libros.length === 0 && <div className="estado"><span>🔎</span><h2>Sin coincidencias</h2><p>Prueba una palabra más general o revisa la escritura.</p></div>}
    {!cargando && !error && libros.length > 0 && <><p className="resultado-info">Mostrando {libros.length} resultados para <strong>“{consulta}”</strong></p><div className="libros">{libros.map((l,i)=><TarjetaLibro key={l.key || i} libro={l}/>)}</div></>}
  </div>;
}