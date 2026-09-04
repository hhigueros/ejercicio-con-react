export default function SiteFooter() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__marca">🌱 Raíz</p>
      <p>Café de origen guatemalteco · Ciudad de Guatemala</p>
      <p>hola@raiz.gt · +502 5555 5555</p>
      <p>© {anio} Raíz. Proyecto académico.</p>
    </footer>
  );
}
