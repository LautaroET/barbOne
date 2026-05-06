# ¿Cómo Usar Esta Landing Page?

## 📌 Resumen Rápido

Has recibido una **landing page profesional** para BarberOne construida con:
- **React 18** (JavaScript moderno)
- **Vite** (bundler super rápido)
- **Tailwind CSS** (estilos utilities)
- **Patrón Singleton** (configuración global)

---

## 🎯 ¿Por Qué Este Enfoque?

### Componentes Pequeños ✅
Cada sección es un componente independiente:
- `Header` - Navegación
- `HeroSection` - Portada
- `ServicesSection` - Servicios
- `GallerySection` - Galería
- `ContactSection` - Ubicación
- `Footer` - Pie de página

**Ventaja**: Fácil de actualizar o cambiar cada sección sin afectar el resto.

### Patrón Singleton 🔒
Hay una clase `ConfigSingleton` que maneja toda la información compartida:
- Nombre de la empresa
- Teléfono, dirección, horarios
- Colores del tema
- Redes sociales
- Servicios

**Ventaja**: Si necesitas cambiar el número de teléfono, lo cambias en UN solo lugar y se actualiza en toda la página.

---

## 🔧 ¿Cómo Cambiar Información?

### Cambiar Número de Teléfono
Abre `src/utils/ConfigSingleton.js` y busca:
```javascript
phone: '0383 495-3696',
```
Cámbialo por el nuevo número.

### Cambiar Color Dorado
Busca en `index.html` o `src/utils/ConfigSingleton.js`:
```javascript
"primary": "#f2ca50",
```
Reemplaza con el código del color que quieras.

### Cambiar Texto de Servicios
Abre `src/components/ServicesSection.jsx` y modifica el array `services`.

### Cambiar Redes Sociales
En `ConfigSingleton.js`, modifica:
```javascript
social: {
  instagram: 'https://tu-url',
  whatsapp: 'https://tu-url',
  facebook: 'https://tu-url',
}
```

### Cambiar Imágenes de Galería
En `src/components/GallerySection.jsx`, modifica los URLs `src` en el array `galleryItems`.

---

## 🚀 Iniciar Servidor de Desarrollo

```bash
cd "c:\Users\Tapia\Documents\Lauty\Diseño Movil\BarberOne\barberone"
npm.cmd run dev
```

Abre: `http://localhost:5174/`

---

## 📦 Construir para Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` lista para subir a un servidor.

---

## 🌐 Próximo Paso: Supabase

Para agregar:
- ✅ Sistema de citas
- ✅ Autenticación de usuarios
- ✅ Base de datos

**Recomendación**: Instalar `@supabase/supabase-js@2.49.1` (versión específica por compatibilidad).

---

## 📊 Estructura de Carpetas

```
src/
├── components/          ← Aquí están los bloques visuales
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── GallerySection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── utils/              ← Aquí van utilidades compartidas
│   └── ConfigSingleton.js
├── App.jsx             ← Componente principal
├── main.jsx            ← Punto de entrada
└── App.css             ← Estilos personalizados

index.html             ← Configuración Tailwind y fuentes
```

---

## 🎨 Personalización Avanzada

### Cambiar Fuentes
En `index.html`, busca la sección de Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700;800&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Agregar Nuevas Secciones
1. Crea un archivo en `src/components/MiSeccion.jsx`
2. Exporta un componente React
3. Importalo en `App.jsx` y agrégalo en el JSX

Ejemplo:
```javascript
// src/components/MiSeccion.jsx
export default function MiSeccion() {
  return <section>Mi contenido aquí</section>
}

// src/App.jsx
import MiSeccion from './components/MiSeccion'
// ...
<MiSeccion />
```

---

## 🔐 Seguridad y Mejoras

### Para Producción:
1. ✅ Reemplazar Tailwind CDN con PostCSS
2. ✅ Optimizar imágenes (WebP, compresión)
3. ✅ Agregar formulario de contacto
4. ✅ Validación de emails
5. ✅ HTTPS obligatorio

---

## 📱 Responsive Design

La página se ve bien en:
- ✅ Teléfonos (móvil)
- ✅ Tablets
- ✅ Computadoras de escritorio

Todos los componentes usan **Tailwind breakpoints** automáticamente.

---

## 🐛 Solución de Problemas

### "npm.ps1 no se puede cargar"
**Solución**: Usa `npm.cmd` en lugar de `npm`

### Cambios no aparecen
**Solución**: Recarga la página (F5) o reinicia el servidor

### Imágenes no cargan
**Solución**: Verifica que los URLs sean válidos y accesibles

---

## 💡 Tips Útiles

1. **Usar la consola del navegador** (F12) para ver errores
2. **Hot Module Replacement**: Los cambios aparecen automáticamente
3. **DevTools de React**: Instala la extensión para debuggear componentes
4. **Tailwind IntelliSense**: Instala en VS Code para autocompletado

---

## 📞 Contacto y Soporte

Para reportar problemas o sugerencias:
1. Abre la terminal
2. Ejecuta `npm run dev`
3. Revisa la consola del navegador (F12 → Console)
4. Busca mensajes de error

---

## ✅ Checklist de Implementación

- [ ] Cambié el número de teléfono
- [ ] Actualicé las redes sociales
- [ ] Cambié las imágenes de la galería
- [ ] Personalizé los colores
- [ ] Probé en móvil (responsivo)
- [ ] Ejecuté `npm run build` para producción
- [ ] Subí los archivos a mi servidor

---

**¡Tu landing page está lista para usar!** 🚀

Cualquier pregunta o mejora, revisa los archivos `.md` de documentación:
- `LANDING_PAGE_DOC.md` - Documentación técnica completa
- `RESUMEN_TECNICO.md` - Resumen ejecutivo
