import { Link } from 'react-router-dom';
export default function SiteFooter() {
  return <footer className="footer"><div className="contenedor footer__grid">
    <div><p className="footer__marca">Página Abierta</p><p>Un proyecto académico para descubrir libros usando datos abiertos.</p></div>
    <div><p className="footer__titulo">Enlaces</p><Link to="/explorar">Explorar</Link><Link to="/privacidad">Privacidad</Link></div>
    <div><p className="footer__titulo">Datos</p><p>Información bibliográfica consultada desde Open Library.</p></div>
  </div><p className="footer__copy">© {new Date().getFullYear()} Página Abierta · Proyecto académico</p></footer>;
}