import { useEffect, useState } from 'react';
import { buscarLibros } from '../services/openLibrary.js';

export function useLibros(consulta) {
  const [estado, setEstado] = useState({ cargando: false, error: '', libros: [] });

  useEffect(() => {
    if (!consulta.trim()) { setEstado({ cargando: false, error: '', libros: [] }); return; }
    const controlador = new AbortController();
    const temporizador = setTimeout(async () => {
      setEstado((e) => ({ ...e, cargando: true, error: '' }));
      try {
        const libros = await buscarLibros(consulta.trim(), controlador.signal);
        setEstado({ cargando: false, error: '', libros });
      } catch (error) {
        if (error.name !== 'AbortError') setEstado({ cargando: false, error: 'La biblioteca no respondió. Intenta nuevamente.', libros: [] });
      }
    }, 450);
    return () => { clearTimeout(temporizador); controlador.abort(); };
  }, [consulta]);

  return estado;
}