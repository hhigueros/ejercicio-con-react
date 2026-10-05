# Página Abierta

Proyecto React + Vite para la actividad AAT1-RA2 Desarrollo del Frontend.

## Funcionalidades
- SPA con React Router y navegación responsive.
- Consumo de la API pública de Open Library mediante una capa separada en `src/services/openLibrary.js`.
- Búsqueda con debounce y cancelación mediante AbortController.
- Estados visibles de carga, error, sin resultados y resultados correctos.
- Formulario controlado con validación.
- Página 404 y metadatos básicos para SEO.
- Configuración de Vite y Router preparada para GitHub Pages.

## API
La aplicación consulta `https://openlibrary.org/search.json` y utiliza título, autor, año de primera publicación, cantidad de ediciones e identificador de portada.

## Ejecutar
```
npm install
npm run dev
```

## Verificar
```
npm run lint
npm run build
```
