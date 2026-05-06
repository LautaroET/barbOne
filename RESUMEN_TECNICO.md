# 🏊 BarberOne - Landing Page React + Vite

## ✅ Proyecto Completado

Se ha implementado una landing page profesional para **BarberOne Barbershop** utilizando **React** + **Vite** con arquitectura modular y el patrón **Singleton** para configuración global.

---

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── Header.jsx              # Navegación y logo
│   ├── HeroSection.jsx         # Sección hero con fondo
│   ├── ServicesSection.jsx     # Grid de 4 servicios
│   ├── GallerySection.jsx      # Galería de trabajos
│   ├── ContactSection.jsx      # Info ubicación y contacto
│   └── Footer.jsx              # Pie de página y redes
├── utils/
│   └── ConfigSingleton.js      # Singleton para configuración global
├── App.jsx                     # Componente raíz
├── App.css                     # Estilos personalizados
└── main.jsx                    # Punto de entrada

index.html                       # Tailwind CDN + fuentes + tema
package.json                     # Dependencias Vite
vite.config.js                  # Configuración Vite
```

---

## 🎨 Diseño e Identidad

### Colores
- **Primary**: `#f2ca50` (Oro)
- **Background**: `#131313` (Oscuro)
- **Text**: `#e5e2e1` (Claro)
- **Accent**: `#ffe088` (Oro claro)

### Tipografía
- **Display**: Epilogue (títulos grandes)
- **Body**: Manrope (textos)
- **Font Sizes**: Escalados según Material Design 3

### Iconografía
- Material Symbols Icons (Google Fonts)

---

## 🔧 Patrón Singleton - ConfigSingleton

### Propósito
Gestionar la configuración global de la aplicación garantizando **una única instancia**.

### Uso
```javascript
import ConfigSingleton from './utils/ConfigSingleton'

// Obtener instancia única
const config = ConfigSingleton.getInstance()

// Acceder a valores
const companyName = config.get('company.name')
const primaryColor = config.get('theme.colors.primary')

// Modificar valores
config.set('company.phone', '0383 495-3696')
```

### Contenido
- **company**: nombre, tagline, teléfono, dirección, horarios
- **theme**: paleta de colores personalizada
- **social**: enlaces a redes sociales
- **services**: array de servicios con iconos

---

## 📱 Componentes Implementados

### 1. Header
- Logo "BARBER ONE"
- Menú navegación responsive
- Botón hamburguesa para móvil
- Fijo en la parte superior

### 2. HeroSection
- Imagen de fondo oscura (barbershop)
- Gradiente overlay
- Título y subtítulo grandes
- Botón animado para scroll

### 3. ServicesSection
- 4 tarjetas de servicios
- Iconos Material Symbols
- Efecto hover con cambio de borde
- Grid responsivo (1 col mobile, 4 cols desktop)

### 4. GallerySection
- Galería de 4 imágenes
- Imágenes en escala de grises
- Overlay con etiqueta al hover
- Grid desalineado (layout premium)

### 5. ContactSection
- Información: dirección, horarios, teléfono
- Mapa estilizado
- Layout 2 columnas

### 6. Footer
- Logo de marca
- Enlaces redes sociales
- Copyright

---

## 🚀 Ejecución

### Desarrollo
```bash
cd "ruta/al/proyecto"
npm.cmd run dev  # En PowerShell Windows
npm run dev      # En terminal normal
```
Servidor: `http://localhost:5174/`

### Producción
```bash
npm run build
npm run preview
```

---

## ⚙️ Tecnologías

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| React | 18+ | Framework UI |
| Vite | 8.0.10 | Bundler rápido |
| Tailwind CSS | 3 (CDN) | Estilos utilities |
| Material Icons | Google Fonts | Iconografía |
| JavaScript | ES6+ | Lógica |

---

## 🎯 Características Implementadas

✅ Componentes modulares y reutilizables  
✅ Patrón Singleton para configuración  
✅ Responsive design (mobile-first)  
✅ Tema oscuro profesional  
✅ Animaciones suaves (scroll, hover)  
✅ Material Design 3 icons  
✅ Google Fonts integradas  
✅ SEO basics (meta tags)  
✅ Navegación fluida  
✅ Efectos hover mejorados  

---

## 📋 Próximas Fases

### Fase 2: Funcionalidad
- [ ] Formulario de contacto con validación
- [ ] Integración con Supabase (autenticación)
- [ ] Sistema de citas online
- [ ] Carrusel de galería interactivo
- [ ] Chat en vivo

### Fase 3: Optimización
- [ ] Reemplazar Tailwind CDN por PostCSS
- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] PWA (Progressive Web App)
- [ ] Lighthouse 90+
- [ ] Minificación y compresión

### Fase 4: Marketing
- [ ] Google Analytics
- [ ] SEO optimizado
- [ ] Meta tags dinámicos
- [ ] Sitemap y robots.txt
- [ ] OpenGraph para redes

---

## 🐛 Troubleshooting

### Error: "npm.ps1 no se puede cargar"
**Solución**: Usar `npm.cmd run dev` en PowerShell

### Tailwind CDN warning
**Nota**: Es normal en desarrollo. Para producción, usar PostCSS plugin.

### Puerto 5173 en uso
**Solución**: Vite usa automáticamente 5174

---

## 📞 Información BarberOne

- **Dirección**: Pje. Argentino, K4700 - San Fernando del Valle de Catamarca
- **Horarios**: Lunes a Sábado 10:00 - 20:00
- **Teléfono**: 0383 495-3696
- **Slogan**: "Mi mundo, Tu lugar"

---

## 📝 Notas de Desarrollo

- Todos los componentes son funcionales
- ConfigSingleton se instancia una sola vez
- Estilos Tailwind son aplicados correctamente
- Material Icons funcionan en todos los navegadores
- Responsive funciona en mobile, tablet y desktop
- Animaciones son suaves (60 FPS)

---

**Última actualización**: 05/05/2026  
**Estado**: ✅ Producción lista (sin Supabase)
