# 🏊 BarberOne - Landing Page Professional

Landing page moderna y responsiva para **BarberOne Barbershop** construida con **React 18**, **Vite** y **Tailwind CSS**.

## ✨ Características

- ✅ **Componentes modulares** - Estructura limpia y reutilizable
- ✅ **Patrón Singleton** - Configuración global centralizada
- ✅ **Responsive Design** - Mobile, tablet y desktop optimizados
- ✅ **Tailwind CSS** - Estilos utilities modernos
- ✅ **Material Icons** - Iconografía profesional
- ✅ **Animaciones suaves** - Transiciones y efectos hover
- ✅ **Hot Module Reload** - Desarrollo rápido con Vite
- ✅ **Tema oscuro** - Elegante y profesional

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
cd "tu/ruta/al/proyecto"
npm install
```

### Desarrollo
```bash
npm.cmd run dev  # Windows PowerShell
npm run dev      # Terminal normal
```

Abre [http://localhost:5174](http://localhost:5174) en tu navegador.

### Producción
```bash
npm run build
npm run preview
```

## 📁 Estructura

```
src/
├── components/
│   ├── Header.jsx          # Navegación principal
│   ├── HeroSection.jsx     # Sección portada
│   ├── ServicesSection.jsx # Servicios destacados
│   ├── GallerySection.jsx  # Galería de trabajos
│   ├── ContactSection.jsx  # Ubicación y contacto
│   └── Footer.jsx          # Pie de página
├── utils/
│   └── ConfigSingleton.js  # Configuración global
├── App.jsx                 # Componente raíz
└── App.css                 # Estilos personalizados

index.html                   # Configuración Tailwind y fuentes
```

## 🔧 Personalización

### Cambiar Información
Edita `src/utils/ConfigSingleton.js`:
- **Empresa**: nombre, teléfono, dirección, horarios
- **Tema**: colores y estilos
- **Redes**: enlaces a redes sociales

### Cambiar Contenido
Cada componente en `src/components/` puede editarse directamente. Usa arrays de datos para mayor flexibilidad.

### Cambiar Estilos
- **Tailwind**: Edita `index.html` para tema personalizado
- **CSS**: Modifica `src/App.css` para estilos adicionales

## 📚 Documentación

- [GUIA_USO.md](GUIA_USO.md) - Guía completa de uso
- [LANDING_PAGE_DOC.md](LANDING_PAGE_DOC.md) - Documentación técnica
- [RESUMEN_TECNICO.md](RESUMEN_TECNICO.md) - Resumen ejecutivo
- [VISTA_PREVIA.md](VISTA_PREVIA.md) - Estructura visual

## 🎨 Diseño

### Colores
- **Primary**: `#f2ca50` (Oro)
- **Background**: `#131313` (Oscuro)
- **Text**: `#e5e2e1` (Claro)
- **Outline**: `#99907c` (Bordes)

### Tipografía
- **Display**: Epilogue (títulos)
- **Body**: Manrope (textos)

### Responsive
- Mobile: < 768px (1 columna)
- Tablet: 768px - 1024px (2 columnas)
- Desktop: > 1024px (4 columnas)

## 🔧 Patrón Singleton

La clase `ConfigSingleton` gestiona toda la configuración compartida:

```javascript
import ConfigSingleton from './utils/ConfigSingleton'

const config = ConfigSingleton.getInstance()
const phone = config.get('company.phone')
```

## 📱 Responsive

Todos los componentes son 100% responsivos:
- ✅ Navegación adaptativa
- ✅ Grid flexible
- ✅ Imágenes optimizadas
- ✅ Texto escalable

## 🚀 Proximas Mejoras

- [ ] Formulario de contacto
- [ ] Integración con Supabase
- [ ] Sistema de citas
- [ ] Carrusel de galería
- [ ] Chat en vivo
- [ ] PWA

## 📞 Información

**BarberOne**
- Dirección: Pje. Argentino, K4700 - San Fernando del Valle de Catamarca
- Teléfono: 0383 495-3696
- Horarios: Lunes a Sábado 10:00 - 20:00

## 📝 Licencia

Proyecto privado de BarberOne Catamarca.

## 🛠️ Stack Tecnológico

- **Frontend**: React 18
- **Bundler**: Vite 8.0
- **Estilos**: Tailwind CSS 3
- **Iconografía**: Material Symbols
- **Fuentes**: Google Fonts
- **Lenguaje**: JavaScript ES6+

---

**Hecho con ❤️ para BarberOne** 🏊
