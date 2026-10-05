const API = 'https://openlibrary.org/search.json';

export async function buscarLibros(consulta, signal) {
  const params = new URLSearchParams({ q: consulta, limit: '12', fields: 'key,title,author_name,first_publish_year,edition_count,cover_i' });
  const respuesta = await fetch(`${API}?${params}`, { signal });
  if (!respuesta.ok) throw new Error('No fue posible consultar la biblioteca.');
  const datos = await respuesta.json();
  return datos.docs ?? [];
}

export function portadaUrl(id) {
  return id ? `https://covers.openlibrary.org/b/id/${id}-M.jpg` : '';
}