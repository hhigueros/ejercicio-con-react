import { EQUIPO } from '../datos.js';
import { useTitulo } from '../hooks/useTitulo.js';

export default function Nosotros() {
  useTitulo('Nosotros');

  return (
    <div className="contenedor seccion">
      <h2>Nuestra historia</h2>
      <p className="seccion__intro">
        Raíz nació en 2023 en una cocina de la zona 1, tostando dos libras de
        café a la semana para los vecinos.
      </p>

      <p>
        Hoy trabajamos con seis familias productoras en Huehuetenango, Antigua y
        Cobán. Compramos su cosecha a un precio por encima del mercado y la
        tostamos aquí mismo, en lotes pequeños, para que llegue fresca.
      </p>

      <p>
        No somos una cadena ni queremos serlo. Nos importa que sepas de dónde
        viene lo que tomas y quién lo cultivó.
      </p>

      <h2 style={{ marginTop: '3rem' }}>El equipo</h2>

      <div className="rejilla">
        {EQUIPO.map((persona) => (
          <article key={persona.id} className="miembro">
            <div className="miembro__avatar" aria-hidden="true">
              {persona.inicial}
            </div>
            <h3>{persona.nombre}</h3>
            <p>{persona.rol}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
