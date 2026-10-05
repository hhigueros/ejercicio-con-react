export const PRODUCTOS = [
  {
    id: 1,
    nombre: 'Huehuetenango 340 g',
    categoria: 'Grano entero',
    precio: 85,
    emoji: '☕',
    resumen: 'Altura de 1,900 msnm. Dulce y cítrico.',
    descripcion:
      'Cultivado por familias productoras de Huehuetenango a más de 1,900 metros sobre el nivel del mar. Tueste medio que resalta su acidez cítrica y su cuerpo sedoso.',
    notas: ['Naranja', 'Panela', 'Cacao'],
    destacado: true,
  },
  {
    id: 2,
    nombre: 'Antigua molido 340 g',
    categoria: 'Molido',
    precio: 78,
    emoji: '🫘',
    resumen: 'Molienda media, listo para cafetera.',
    descripcion:
      'Nuestro clásico del Valle de Panchoy. Molienda media pensada para cafetera de goteo. Chocolate oscuro y un final largo y limpio.',
    notas: ['Chocolate', 'Almendra', 'Caramelo'],
    destacado: true,
  },
  {
    id: 3,
    nombre: 'Cobán descafeinado 250 g',
    categoria: 'Grano entero',
    precio: 92,
    emoji: '🌿',
    resumen: 'Descafeinado al agua, sin químicos.',
    descripcion:
      'Proceso de descafeinado al agua que conserva el sabor original del grano. Ideal para la tarde o para quienes cuidan su consumo de cafeína.',
    notas: ['Nuez', 'Miel', 'Vainilla'],
    destacado: false,
  },
  {
    id: 4,
    nombre: 'Mezcla de la casa 500 g',
    categoria: 'Molido',
    precio: 65,
    emoji: '🏠',
    resumen: 'Nuestra mezcla diaria, rendidora.',
    descripcion:
      'Combinación de granos de tres regiones. Equilibrada, sin acidez marcada y pensada para tomar todos los días sin cansarse.',
    notas: ['Caramelo', 'Pan tostado'],
    destacado: false,
  },
  {
    id: 5,
    nombre: 'Prensa francesa 600 ml',
    categoria: 'Accesorios',
    precio: 180,
    emoji: '🫖',
    resumen: 'Vidrio templado y filtro de acero.',
    descripcion:
      'Prensa francesa de vidrio templado con filtro de acero inoxidable. Prepara hasta 4 tazas y es la forma más sencilla de empezar a preparar café de especialidad en casa.',
    notas: [],
    destacado: false,
  },
  {
    id: 6,
    nombre: 'Taza de barro artesanal',
    categoria: 'Accesorios',
    precio: 45,
    emoji: '🏺',
    resumen: 'Hecha a mano en Chinautla.',
    descripcion:
      'Taza de barro moldeada a mano por artesanas de Chinautla. Cada pieza es única, así que el color y el tamaño varían ligeramente.',
    notas: [],
    destacado: false,
  },
];

export const CATEGORIAS = ['Todos', 'Grano entero', 'Molido', 'Accesorios'];

export const BENEFICIOS = [
  {
    id: 1,
    icono: '🌱',
    titulo: 'Origen conocido',
    texto:
      'Sabemos el nombre de cada finca y de cada familia que cultiva nuestro café.',
  },
  {
    id: 2,
    icono: '🔥',
    titulo: 'Tueste reciente',
    texto: 'Tostamos cada semana. Tu bolsa nunca tiene más de 10 días.',
  },
  {
    id: 3,
    icono: '🤝',
    titulo: 'Precio justo',
    texto:
      'Pagamos por encima del precio de mercado directamente al productor.',
  },
];

export const EQUIPO = [
  { id: 1, inicial: 'M', nombre: 'María Xoc', rol: 'Fundadora y tostadora' },
  {
    id: 2,
    inicial: 'D',
    nombre: 'Diego Ramos',
    rol: 'Relación con productores',
  },
  { id: 3, inicial: 'L', nombre: 'Lucía Pérez', rol: 'Ventas y comunidad' },
];

export const ENLACES = [
  { id: 'inicio', texto: 'Inicio', ruta: '/' },
  { id: 'productos', texto: 'Productos', ruta: '/productos' },
  { id: 'nosotros', texto: 'Nosotros', ruta: '/nosotros' },
  { id: 'contacto', texto: 'Contacto', ruta: '/contacto' },
];
