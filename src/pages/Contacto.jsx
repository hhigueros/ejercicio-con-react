import { useState } from 'react';
import { useTitulo } from '../hooks/useTitulo.js';
const VACIO={nombre:'',correo:'',motivo:'',mensaje:'',acepta:false};
export default function Contacto(){
 useTitulo('Contacto'); const [datos,setDatos]=useState(VACIO); const [tocado,setTocado]=useState({}); const [enviado,setEnviado]=useState(false);
 const errores={nombre:datos.nombre.trim().length<3?'Escribe al menos 3 caracteres':'',correo:!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(datos.correo)?'Escribe un correo válido':'',motivo:!datos.motivo?'Selecciona un motivo':'',mensaje:datos.mensaje.trim().length<12?'Escribe al menos 12 caracteres':'',acepta:!datos.acepta?'Debes aceptar esta condición':''};
 const valido=Object.values(errores).every(v=>!v);
 const cambio=e=>{const {name,value,type,checked}=e.target;setDatos(d=>({...d,[name]:type==='checkbox'?checked:value}))};
 const enviar=e=>{e.preventDefault();if(!valido){setTocado({nombre:true,correo:true,motivo:true,mensaje:true,acepta:true});return;}setEnviado(true)};
 if(enviado)return <div className="contenedor seccion"><div className="exito"><span>✓</span><h1>Mensaje preparado</h1><p>Gracias, {datos.nombre}. Esta demostración validó correctamente tu información.</p></div><button className="boton boton--secundario" onClick={()=>{setDatos(VACIO);setTocado({});setEnviado(false)}}>Escribir otro</button></div>;
 const campo=(n)=>tocado[n]&&errores[n];
 return <div className="contenedor seccion contacto-grid"><div><span className="eyebrow">CONTACTO</span><h1>¿Tienes una recomendación?</h1><p className="lead">Cuéntanos qué mejorarías de Página Abierta o qué tipo de libros te gustaría encontrar.</p><div className="nota"><strong>Proyecto académico</strong><p>Este formulario demuestra manejo de estado y validación. No envía información a un servidor.</p></div></div>
 <form className="formulario" onSubmit={enviar} noValidate>
 {['nombre','correo'].map(n=><div className={campo(n)?'campo campo--error':'campo'} key={n}><label htmlFor={n}>{n==='nombre'?'Nombre':'Correo electrónico'}</label><input id={n} name={n} type={n==='correo'?'email':'text'} value={datos[n]} onChange={cambio} onBlur={()=>setTocado(t=>({...t,[n]:true}))}/>{campo(n)&&<small>{errores[n]}</small>}</div>)}
 <div className={campo('motivo')?'campo campo--error':'campo'}><label htmlFor="motivo">Motivo</label><select id="motivo" name="motivo" value={datos.motivo} onChange={cambio} onBlur={()=>setTocado(t=>({...t,motivo:true}))}><option value="">Selecciona</option><option>Sugerencia de libro</option><option>Comentario del sitio</option><option>Otro</option></select>{campo('motivo')&&<small>{errores.motivo}</small>}</div>
 <div className={campo('mensaje')?'campo campo--error':'campo'}><label htmlFor="mensaje">Mensaje</label><textarea id="mensaje" name="mensaje" rows="5" maxLength="400" value={datos.mensaje} onChange={cambio} onBlur={()=>setTocado(t=>({...t,mensaje:true}))}/><span className="contador">{datos.mensaje.length}/400</span>{campo('mensaje')&&<small>{errores.mensaje}</small>}</div>
 <label className="checkbox"><input type="checkbox" name="acepta" checked={datos.acepta} onChange={cambio}/> Entiendo que este formulario es una demostración académica.</label>{campo('acepta')&&<small className="mensaje-error">{errores.acepta}</small>}
 <button className="boton" type="submit">Validar mensaje</button></form></div>;
}