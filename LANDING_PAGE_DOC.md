# Landing Page BarberOne - Documentación

## Descripción General
Esta landing page está construida con **React + Vite** utilizando **Tailwind CSS** y el patrón de diseño **Singleton** para manejar la configuración global.

## Estructura del Proyecto

### Componentes (`src/components/`)

#### 1. **Header.jsx**
- Barra de navegación fija en la parte superior
- Logo y menú de navegación
- Botón de menú móvil
- Responsive design para dispositivos móviles

#### 2. **HeroSection.jsx**
- Sección hero con imagen de fondo
- Título y subtítulo principal
- Botón de scroll animado
- Ocupa toda la altura de la pantalla

#### 3. **ServicesSection.jsx**
- Muestra 4 servicios principales del barbershop
- Diseño en grid responsivo
- Iconos de Material Symbols
- Efecto hover en las tarjetas

#### 4. **GallerySection.jsx**
- Galería de trabajos recientes (4 imágenes)
- Grid responsivo
- Overlay con etiquetas al pasar el mouse
- Imágenes en escala de grises con efecto hover

#### 5. **ContactSection.jsx**
- Información de ubicación y contacto
- Mapa interactivo
- Icono de ubicación
- Layout en dos columnas

#### 6. **Footer.jsx**
- Logo de la marca
- Enlaces a redes sociales
- Copyright

### Utilidades (`src/utils/`)

#### **ConfigSingleton.js**
Patrón Singleton que gestiona:
- Información de la empresa (nombre, teléfono, dirección, horarios)
- Configuración del tema (colores)
- Enlaces a redes sociales
- Datos de servicios

**Uso:**
```javascript
import ConfigSingleton from './utils/ConfigSingleton'

const config = ConfigSingleton.getInstance()
const company = config.get('company.name') // "BARBER ONE"
```

### Archivos Principales

#### **App.jsx**
- Componente raíz que integra todos los componentes
- Obtiene la instancia del Singleton
- Define la estructura general de la página

#### **index.html**
- Configuración de Tailwind CSS con tema personalizado
- Fuentes de Google (Epilogue, Manrope)
- Material Symbols Icons
- Colores personalizados del diseño

#### **App.css**
- Animaciones personalizadas
- Estilos adicionales complementarios
- Efectos hover mejorados
- Responsive utilities

## Patrón Singleton

El patrón Singleton garantiza que exista **una única instancia** de la configuración en toda la aplicación.

### Ventajas:
✅ Datos compartidos consistentes  
✅ Mejor mantenimiento de configuración  
✅ Acceso global a la información  
✅ Facilita cambios en la configuración  

### Implementación:
```javascript
// Obtener la instancia (siempre la misma)
const config = ConfigSingleton.getInstance()

// Acceder a valores
config.get('company.name')
config.get('theme.colors.primary')

// Actualizar valores
config.set('company.phone', '0383 495-3696')
```

## Paleta de Colores

- **Primary**: `#f2ca50` (Oro principal)
- **Primary Fixed**: `#ffe088` (Oro claro)
- **Surface**: `#131313` (Fondo oscuro)
- **On Background**: `#e5e2e1` (Texto claro)
- **Outline**: `#99907c` (Bordes)

## Tipografía

- **Display XL**: Epilogue 72px (títulos principales)
- **Headline Large**: Epilogue 48px (títulos secciones)
- **Headline Medium**: Epilogue 32px (subtítulos)
- **Body Large**: Manrope 18px (textos grandes)
- **Body Medium**: Manrope 16px (textos normales)
- **Label Caps**: Epilogue 14px (etiquetas)

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Características Implementadas

✅ Componentes modulares y reutilizables  
✅ Patrón Singleton para configuración global  
✅ Tailwind CSS con tema personalizado  
✅ Material Symbols Icons integrados  
✅ Responsive design  
✅ Animaciones suaves  
✅ Efectos hover interactivos  
✅ Navegación fluida  
✅ Google Fonts integradas  
✅ Modo oscuro por defecto  

## Próximas Mejoras

- [ ] Agregar formulario de contacto funcional
- [ ] Integrar con Supabase para gestión de citas
- [ ] Agregar carrusel de galería
- [ ] Implementar búsqueda de horarios
- [ ] Agregar chat en vivo
- [ ] Optimización de imágenes
- [ ] PWA (Progressive Web App)
