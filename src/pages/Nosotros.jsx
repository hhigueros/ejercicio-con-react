import { useTitulo } from '../hooks/useTitulo.js';
export default function Nosotros() {
 useTitulo('Proyecto');
 return <div className="contenedor seccion pagina-texto"><span className="eyebrow">SOBRE EL PROYECTO</span><h1>Una biblioteca digital sencilla y útil</h1>
 <p className="lead">Página Abierta nació como un ejercicio de frontend para convertir una landing page estática en una experiencia conectada a datos reales.</p>
 <div className="bloques-info"><article><h2>¿Qué resuelve?</h2><p>Permite descubrir referencias bibliográficas sin mantener un catálogo manual. La información se solicita cuando el usuario realiza una búsqueda.</p></article>
 <article><h2>¿De dónde vienen los datos?</h2><p>Los resultados provienen de la API pública de Open Library. El sitio procesa título, autor, año, número de ediciones y portada cuando está disponible.</p></article>
 <article><h2>Diseñado para fallar bien</h2><p>La interfaz contempla carga, resultados vacíos y errores de red. Así el usuario siempre entiende qué está pasando.</p></article></div></div>;
}