// Contenido del sitio. Los nombres de ícono se resuelven en cada componente.

export const gallery = [
  { id: "01", title: "Rubber fort", img: "/images/img1.jpeg", span: "large" },
  { id: "02", title: "Técnica híbrida", img: "/images/img2.jpeg", span: "wide" },
  { id: "03", title: "Extensiones de pestañas 1x1", img: "/images/img3.jpeg", span: "small" },
  { id: "04", title: "Brow lamination", img: "/images/img4.jpeg", span: "small" },
  { id: "05", title: "Pedicura deluxe spa", img: "/images/img5.jpeg", span: "small-last" },
]

export const benefits = [
  {
    icon: "sparkles",
    title: "Técnicas de vanguardia",
    body: "Utilizamos métodos y productos de última generación para garantizar resultados duraderos que resaltan tu belleza natural con la más alta precisión.",
  },
  {
    icon: "heart",
    title: "Atención personalizada",
    body: "Cada visita comienza con una consulta dedicada. Escuchamos tus objetivos y adaptamos cada tratamiento a tus necesidades específicas.",
  },
  {
    icon: "gem",
    title: "Ambiente de lujo",
    body: "Nuestro estudio está diseñado para que cada momento sea una experiencia de relajación y bienestar absoluto, desde que llegas hasta que te vas.",
  },
]

export const menu = [
  {
    category: "Manicura",
    icon: "hand",
    items: [
      { name: "Manicura Clásica", price: "$15", duration: "30 min" },
      { name: "Manicura con Gel", price: "$25", duration: "45 min" },
      { name: "Manicura Semipermanente", price: "$30", duration: "50 min" },
      { name: "Uñas Acrílicas", price: "$45", duration: "90 min" },
      { name: "Nail Art Personalizado", price: "$55", duration: "90 min" },
    ],
  },
  {
    category: "Pedicura",
    icon: "droplets",
    items: [
      { name: "Pedicura Clásica", price: "$20", duration: "40 min" },
      { name: "Pedicura Spa", price: "$35", duration: "60 min" },
      { name: "Pedicura con Gel", price: "$30", duration: "50 min" },
    ],
  },
  {
    category: "Tratamientos Faciales",
    icon: "flower",
    items: [
      { name: "Limpieza Facial Profunda", price: "$40", duration: "60 min" },
      { name: "Hidratación Facial", price: "$35", duration: "45 min" },
      { name: "Tratamiento Anti-edad", price: "$55", duration: "60 min" },
    ],
  },
  {
    category: "Cejas & Pestañas",
    icon: "sparkles",
    items: [
      { name: "Diseño de Cejas", price: "$12", duration: "20 min" },
      { name: "Tinte de Cejas", price: "$15", duration: "20 min" },
      { name: "Lifting de Pestañas", price: "$35", duration: "45 min" },
      { name: "Extensiones de Pestañas", price: "$50", duration: "90 min" },
    ],
  },
  {
    category: "Depilación",
    icon: "scissors",
    items: [
      { name: "Depilación con Cera (Piernas)", price: "$25", duration: "30 min" },
      { name: "Depilación con Cera (Axilas)", price: "$10", duration: "15 min" },
      { name: "Depilación Facial", price: "$12", duration: "15 min" },
    ],
  },
  {
    category: "Paquetes Especiales",
    icon: "gem",
    items: [
      { name: "Paquete Novia", price: "$120", duration: "3 hrs" },
      { name: "Día de Spa Completo", price: "$95", duration: "2.5 hrs" },
      { name: "Paquete Quinceañera", price: "$85", duration: "2 hrs" },
    ],
  },
]
