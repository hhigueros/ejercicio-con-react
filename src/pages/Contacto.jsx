import { useState } from 'react';
import { useTitulo } from '../hooks/useTitulo.js';

const FORM_VACIO = {
  nombre: '',
  correo: '',
  interes: '',
  mensaje: '',
  acepta: false,
};

export default function Contacto() {
  useTitulo('Contacto');

  // aquí sigue TODO lo que ya tenías
  const [datos, setDatos] = useState(FORM_VACIO);
  const [tocado, setTocado] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  // ---------- Validación: se CALCULA en cada render ----------
  const errores = {
    nombre:
      datos.nombre.trim().length < 3
        ? 'Escribe tu nombre (mínimo 3 letras)'
        : '',
    correo: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(datos.correo)
      ? 'Escribe un correo válido, por ejemplo ana@correo.com'
      : '',
    interes: datos.interes === '' ? 'Elige un motivo de contacto' : '',
    mensaje:
      datos.mensaje.trim().length < 10
        ? 'Cuéntanos un poco más (mínimo 10 caracteres)'
        : '',
    acepta: !datos.acepta ? 'Debes aceptar para poder responderte' : '',
  };

  const esValido = Object.values(errores).every((e) => e === '');

  // ---------- Un solo manejador para TODOS los campos ----------
  function manejarCambio(evento) {
    const { name, value, type, checked } = evento.target;
    setDatos((previos) => ({
      ...previos,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function marcarTocado(evento) {
    setTocado((previos) => ({ ...previos, [evento.target.name]: true }));
  }

  function mostrarError(campo) {
    return tocado[campo] && errores[campo] !== '';
  }

  // ---------- Procesar el envío ----------
  async function manejarEnvio(evento) {
    evento.preventDefault(); // evita que se recargue la página

    if (!esValido) {
      // marca todos los campos como tocados para mostrar todos los errores
      setTocado({
        nombre: true,
        correo: true,
        interes: true,
        mensaje: true,
        acepta: true,
      });
      return;
    }

    setEnviando(true);
    console.log('Datos recibidos del formulario:', datos);
    await new Promise((r) => setTimeout(r, 700)); // simula el envío al servidor
    setEnviando(false);
    setEnviado(true);
  }

  function nuevoMensaje() {
    setDatos(FORM_VACIO);
    setTocado({});
    setEnviado(false);
  }

  // ---------- Pantalla de éxito ----------
  if (enviado) {
    return (
      <div className="contenedor seccion">
        <div className="exito">
          <h3>✅ ¡Gracias, {datos.nombre}!</h3>
          <p>
            Recibimos tu mensaje sobre <strong>{datos.interes}</strong>.
          </p>
          <p>
            Te responderemos a <strong>{datos.correo}</strong> en menos de 24
            horas.
          </p>
        </div>
        <p style={{ marginTop: '1.5rem' }}>
          <button className="boton boton--borde" onClick={nuevoMensaje}>
            Enviar otro mensaje
          </button>
        </p>
      </div>
    );
  }

  // ---------- El formulario ----------
  return (
    <div className="contenedor seccion">
      <h2>Hablemos</h2>
      <p className="seccion__intro">
        ¿Quieres hacer un pedido, vender Raíz en tu negocio o solo saludar?
        Escríbenos.
      </p>

      <form className="formulario" onSubmit={manejarEnvio} noValidate>
        <div
          className={mostrarError('nombre') ? 'campo campo--error' : 'campo'}
        >
          <label htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={datos.nombre}
            onChange={manejarCambio}
            onBlur={marcarTocado}
            placeholder="Ana Rodríguez"
          />
          {mostrarError('nombre') && (
            <span className="mensaje-error">{errores.nombre}</span>
          )}
        </div>

        <div
          className={mostrarError('correo') ? 'campo campo--error' : 'campo'}
        >
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={datos.correo}
            onChange={manejarCambio}
            onBlur={marcarTocado}
            placeholder="ana@correo.com"
          />
          {mostrarError('correo') && (
            <span className="mensaje-error">{errores.correo}</span>
          )}
        </div>

        <div
          className={mostrarError('interes') ? 'campo campo--error' : 'campo'}
        >
          <label htmlFor="interes">Motivo</label>
          <select
            id="interes"
            name="interes"
            value={datos.interes}
            onChange={manejarCambio}
            onBlur={marcarTocado}
          >
            <option value="">Elige una opción</option>
            <option value="pedido">Hacer un pedido</option>
            <option value="mayoreo">Comprar al por mayor</option>
            <option value="alianza">Vender Raíz en mi negocio</option>
            <option value="otro">Otro</option>
          </select>
          {mostrarError('interes') && (
            <span className="mensaje-error">{errores.interes}</span>
          )}
        </div>

        <div
          className={mostrarError('mensaje') ? 'campo campo--error' : 'campo'}
        >
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={datos.mensaje}
            onChange={manejarCambio}
            onBlur={marcarTocado}
            placeholder="Cuéntanos qué necesitas…"
          />
          <span className="ayuda">{datos.mensaje.length} caracteres</span>
          {mostrarError('mensaje') && (
            <span className="mensaje-error">{errores.mensaje}</span>
          )}
        </div>

        <label className="checkbox">
          <input
            type="checkbox"
            name="acepta"
            checked={datos.acepta}
            onChange={manejarCambio}
          />
          Acepto que usen mi correo para responder a esta consulta.
        </label>

        <button className="boton" type="submit" disabled={enviando}>
          {enviando ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </form>
    </div>
  );
}
