import { Link } from 'react-router-dom';
import { GENEROS, PASOS } from '../datos.js';
import { useTitulo } from '../hooks/useTitulo.js';

export default function Inicio() {
  useTitulo('Inicio');
  return <>
    <header className="hero"><div className="contenedor hero__contenido">
      <span className="eyebrow">LECTURAS · IDEAS · DESCUBRIMIENTOS</span>
      <h1>Tu próxima historia puede empezar con una búsqueda.</h1>
      <p>Explora libros, autores y ediciones de distintas épocas usando información bibliográfica abierta.</p>
      <div className="hero__acciones"><Link className="boton" to="/explorar">Explorar biblioteca</Link><Link className="boton boton--claro" to="/nosotros">Conocer el proyecto</Link></div>
    </div></header>
    <section className="contenedor seccion"><div className="encabezado-seccion"><span>PARA EXPLORAR</span><h2>Empieza por una curiosidad</h2></div>
      <div className="generos">{GENEROS.map(g=><article className="genero" key={g.titulo}><span>{g.icono}</span><h3>{g.titulo}</h3><p>{g.texto}</p></article>)}</div>
    </section>
    <section className="franja"><div className="contenedor seccion"><div className="encabezado-seccion"><span>ASÍ FUNCIONA</span><h2>De una palabra a una nueva lectura</h2></div>
      <div className="pasos">{PASOS.map(p=><article key={p.numero}><b>{p.numero}</b><h3>{p.titulo}</h3><p>{p.texto}</p></article>)}</div>
    </div></section>
  </>;
}