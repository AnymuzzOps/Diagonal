# Diagonal Sushi

Landing page moderna para **DIAGONAL SUSHI** construida con React + Vite + Tailwind CSS.

## Funcionalidades

- Header sticky con logo, navegación responsive y contador de carrito.
- Hero visual con banner promocional, CTA a carta y carrito.
- Carta por categorías: Rolls, Handrolls, Ceviches, Promociones y Bebidas.
- Carrito lateral con cantidades, eliminación, subtotal y total final.
- Generación de pedido por WhatsApp con detalle de productos y total.
- Bloques breves de local y Talca con enlace a Google Maps.

## Despliegue en GitHub Pages desde branch

Este repo queda preparado para **Deploy from a branch** usando `main` y carpeta `/ (root)`.

La página no queda en blanco porque `index.html` carga React, ReactDOM, Babel y Tailwind desde CDN, y luego ejecuta `src/main.jsx` como JSX de navegador. Si prefieres un despliegue compilado con Vite, usa `npm install` y `npm run build` en un entorno con acceso al registro npm.

## Configuración editable

- Productos: editar el array `products` en `src/main.jsx`.
- WhatsApp: cambiar `WHATSAPP_NUMBER` en `src/main.jsx`.
- Logo principal: reemplazar `public/logo-diagonal.svg` por el archivo definitivo si se requiere.

## Comandos

```bash
npm install
npm run dev
npm run build
```
