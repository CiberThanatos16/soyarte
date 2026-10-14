# Soy Arte — Next.js

Migración del sitio a Next.js (App Router) + Tailwind v4, aplicando la auditoría UI/UX.

## 1. Instalar y correr

```bash
npm install
npm run dev
```

## 2. Copiar tus assets a `public/`

Los componentes esperan estos nombres (en minúsculas, para que funcionen en servidores Linux):

| Original            | Destino                                |
| ------------------- | -------------------------------------- |
| `Cap.PNG`           | `public/images/hero-profesional.png`   |
| `art-hero.mp4`      | `public/video/art-hero.mp4`            |
| `img1.jpeg` … `img5.jpeg` | `public/images/servicio-1.jpeg` … `servicio-5.jpeg` |
| `nails-flower.jpg`  | `public/images/nosotros.jpg`           |

Recomendado: comprimir el video (idealmente < 3 MB) y convertir las fotos a WebP.

## 3. Datos pendientes (`lib/site.js`)

- `whatsapp` y `phoneDisplay`: hoy son placeholders; todos los botones de reserva usan este número.
- `rating`: confirmar de dónde sale el 5.0 (Google, Instagram…) y cuántas reseñas hay.
- `stats`: confirmar que 8+ años / 500+ clientas / 15+ servicios son reales, o borrar el arreglo.
- `currency`: los precios se muestran como MXN; ajustar si son otra moneda.
- Agregar teléfono y horarios al JSON-LD de `app/layout.jsx` cuando sean reales.

## Estructura

```
app/        layout (next/font, metadata, JSON-LD), page, globals.css (tokens)
components/ Navbar, Hero, Services, About, Benefits, MenuServices, Footer, WhatsAppButton
lib/        site.js (datos del negocio y enlace wa.me), data.js (contenido)
```
