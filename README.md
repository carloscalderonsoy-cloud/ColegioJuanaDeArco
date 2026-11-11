# Colegio Juana de Arco La Estancia — Sitio web

HTML + CSS + JS simple, sin build ni dependencias. Vercel: framework **Other**, sin comando de build, directorio de salida = raíz.

```
/
├── index.html · nosotros · preescolar · primaria · secundaria · admisiones · contacto · 404
├── vercel.json        URLs limpias (/secundaria), cabeceras y caché
├── robots.txt · sitemap.xml
├── assets/
│   ├── css/  tokens.css (colores, tipografía) · base.css · components.css
│   ├── js/   main.js (menú, animaciones, formularios → WhatsApp)
│   ├── fonts/        (vacía; hoy se cargan de Google Fonts)
│   ├── img/  logo/ (escudo.png) · fotos/ (JPG optimizados) · iconos/
│   └── video/ hero.mp4 (pendiente)
├── FOTOS/             originales PNG (ignorados por git)
└── referencia/        export del diseño en Claude (no se indexa)
```

## Pendientes antes de publicar
1. Video del hero: `assets/video/hero.mp4` (ver README de esa carpeta).
2. Imagen para redes: `assets/img/og.jpg` (1200×630).
3. Buscar `CONFIRMAR` en los HTML: C.P., horario, requisitos, redes, enlace de reseñas, valores.
4. `aviso-privacidad.html` es un borrador de ejemplo: sustituir por el personalizado.
5. Si el dominio no es `colegiojuanadearco.edu.mx`, cambiarlo en `sitemap.xml`, `robots.txt` y los `canonical`/`og:url`.
6. Formularios: arman un mensaje a WhatsApp 33 2605 3778 (`assets/js/main.js`, constante `WA`).

## Convenciones
- Un H1 por página con la búsqueda objetivo; todo en español.
- Colores y tipografías solo desde `tokens.css`. Rojo `#E03C27` con texto blanco únicamente en botones de texto grande/negrita.
- Animaciones sutiles con `prefers-reduced-motion` respetado.
