import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Inicio from './pages/Inicio.jsx';
import Explorar from './pages/Explorar.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from './pages/Contacto.jsx';
import Privacidad from './pages/Privacidad.jsx';
import NoEncontrado from './pages/NoEncontrado.jsx';

export default function App() {
  return <div className="layout">
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </main>
    <SiteFooter />
  </div>;
}