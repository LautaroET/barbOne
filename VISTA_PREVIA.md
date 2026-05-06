# 📸 Vista Previa BarberOne Landing Page

## Estructura Visual

```
┌─────────────────────────────────────────┐
│  BARBER ONE  [LOGO]          [≡] MENU   │  ← Header fijo
├─────────────────────────────────────────┤
│                                         │
│              BARBER ONE                 │
│          MI MUNDO, TU LUGAR             │
│                                         │
│          [⬇ Scroll]                      │  ← Hero Section
│       (Imagen de fondo)                 │
│                                         │
├─────────────────────────────────────────┤
│  ¿POR QUÉ ELEGIRNOS?                    │
│  ─────────────                          │
│                                         │
│  [🔒]        [📅]       [💳]      [👶]   │
│   Sin...     Cita...     Pagos...  Para  │
│  Riesgo      Previa      Móviles   Niños │
│                                         │  ← Services Section
│  Tarjeta 1   Tarjeta 2   Tarjeta 3 Tarjeta 4
│  (Hover     (Hover     (Hover    (Hover
│   borde      borde      borde     borde
│   dorado)    dorado)    dorado)   dorado)
│                                         │
├─────────────────────────────────────────┤
│  NUESTRO ARTE                           │
│  ──────────                             │
│  Precisión, estilo y dedicación...      │
│                                         │
│  [Fade]    [Barba]   [Clásico]  [Herr.] │
│  Moderno   Perfilado  Corte      (B/W)  │
│  (B/W)     (B/W)      (B/W)             │  ← Gallery Section
│ IMG.1     IMG.2      IMG.3      IMG.4   │
│(Hover    (Hover     (Hover     (Hover   │
│ scale)    scale)     scale)     scale)  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  UBICACIÓN & CONTACTO                   │
│  ─────────────────────                  │
│                                         │
│  📍 Dirección              [MAPA]       │
│  Pje. Argentino, K4700                  │
│  San Fernando del Valle...   [Ubicación]│  ← Contact Section
│                                         │
│  🕐 Horarios               (Imagen)     │
│  Lunes a Sábado: 10-20                  │
│                                         │
│  📱 Teléfono                            │
│  0383 495-3696                          │
│                                         │
├─────────────────────────────────────────┤
│          BARBER ONE                     │
│  [Instagram] [WhatsApp] [Facebook]      │
│                                         │  ← Footer
│  © 2024 BARBER ONE. MI MUNDO, TU LUGAR  │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
```
┌──────────┐
│ B.ONE [≡]│  ← Header compacto
├──────────┤
│ HERO     │
│ TITLE    │  ← Full width
├──────────┤
│Svc. 1    │
├──────────┤
│Svc. 2    │  ← 1 columna
├──────────┤
│Svc. 3    │
├──────────┤
│Svc. 4    │
└──────────┘
```

### Tablet (768px - 1024px)
```
┌─────────────────┐
│ B.ONE  Servicios│  ← Menu visible
├─────────────────┤
│   HERO TITLE    │
├─────────────────┤
│ Svc.1 │ Svc.2   │
├───────┼─────────┤
│ Svc.3 │ Svc.4   │  ← 2 columnas
└───────┴─────────┘
```

### Desktop (> 1024px)
```
┌─────────────────────────────────┐
│ B.ONE     Servicios | Arte|Ubic. │  ← Menu completo
├─────────────────────────────────┤
│         HERO TITLE              │
├─────────────────────────────────┤
│Svc.1│Svc.2│Svc.3│Svc.4         │
├─────────────────────────────────┤
│ IMG1  IMG2  IMG3  IMG4          │  ← 4 columnas
├─────────────────────────────────┤
│ Contacto                        │
│ Dirección | Mapa                │
└─────────────────────────────────┘
```

---

## 🎨 Esquema de Colores

### Paleta Principal
```
┌─────────────────┐
│ #f2ca50         │  ← Dorado (Primary)
│ BARBER ONE      │
│ Acentos         │
└─────────────────┘

┌─────────────────┐
│ #131313         │  ← Oscuro (Background)
│ Fondo principal │
└─────────────────┘

┌─────────────────┐
│ #e5e2e1         │  ← Claro (Text)
│ Texto principal │
└─────────────────┘

┌─────────────────┐
│ #4d4635         │  ← Outline (Bordes)
│ Divisiones      │
└─────────────────┘
```

---

## 🔤 Tipografía

```
┌─────────────────────────────────┐
│  BARBER ONE              72px    │  ← Display XL
│  (Epilogue 800)                 │
├─────────────────────────────────┤
│ ¿POR QUÉ ELEGIRNOS?     48px    │  ← Headline Large
│ (Epilogue 700)                  │
├─────────────────────────────────┤
│ Sanitario impecable  32px       │  ← Headline Medium
│ (Epilogue 700)                  │
├─────────────────────────────────┤
│ Precisión, estilo y ded... 16px │  ← Body Medium
│ (Manrope 400)                   │
├─────────────────────────────────┤
│ SERVICIOS             14px      │  ← Label Caps
│ (Epilogue 600)                  │
└─────────────────────────────────┘
```

---

## ✨ Efectos Interactivos

### Hover en Tarjetas de Servicios
```
ANTES                      DESPUÉS
┌──────────────┐          ┌──────────────┐
│   [🔒]       │   Hover  │   [🔒]       │
│ Sanitario    │ ────→    │ Sanitario    │
│              │          │ Borde Dorado │
└──────────────┘          └──────────────┘
  Borde gris                                Borde #f2ca50
```

### Hover en Galería
```
ANTES                      DESPUÉS
┌──────────────┐          ┌──────────────┐
│              │          │              │
│  Imagen B/W  │  Hover   │  Imagen B/W  │
│              │ ────→    │ (Escalada)   │
│  sin overlay │          │ + Overlay    │
│              │          │ + Label      │
└──────────────┘          └──────────────┘
  Escala 1                  Escala 1.05
  Sin label                 + Fade Moderno
```

### Hover en Navegación
```
ANTES            DESPUÉS
Servicios   →    Servicios
(gris)          (dorado)
                 (subrayado)
```

---

## 📊 Estructura de Componentes

```
App.jsx
├── Header
│   ├── Logo "BARBER ONE"
│   ├── Navigation (desktop)
│   └── Menu Button (mobile)
│
├── HeroSection
│   ├── Background Image
│   ├── Title
│   ├── Subtitle
│   └── Scroll Arrow
│
├── ServicesSection
│   ├── Title "¿Por qué elegirnos?"
│   ├── ServiceCard 1 (Sanitario)
│   ├── ServiceCard 2 (Cita previa)
│   ├── ServiceCard 3 (Pagos)
│   └── ServiceCard 4 (Niños)
│
├── GallerySection
│   ├── Title "Nuestro Arte"
│   ├── GalleryItem 1 (Fade)
│   ├── GalleryItem 2 (Barba)
│   ├── GalleryItem 3 (Clásico)
│   └── GalleryItem 4 (Herramientas)
│
├── ContactSection
│   ├── Contact Info
│   │   ├── Address
│   │   ├── Hours
│   │   └── Phone
│   └── Map Image
│
└── Footer
    ├── Logo
    ├── Social Links
    └── Copyright
```

---

## 🔧 Configuración Singleton

```javascript
ConfigSingleton.getInstance()
│
├── company
│   ├── name: "BARBER ONE"
│   ├── phone: "0383 495-3696"
│   ├── address: "Pje. Argentino, K4700"
│   └── hours: "Lunes a Sábado: 10:00 - 20:00"
│
├── theme
│   └── colors: { primary, background, text... }
│
├── social
│   ├── instagram: "url"
│   ├── whatsapp: "url"
│   └── facebook: "url"
│
└── services
    ├── { icon: "sanitizer", title: "..." }
    ├── { icon: "event_available", title: "..." }
    ├── { icon: "contactless", title: "..." }
    └── { icon: "child_care", title: "..." }
```

---

## 🎬 Animaciones

### Scroll Arrow (Hero)
```
Ciclo: ↓ (hacia abajo) → arriba → abajo...
Duración: 2 segundos
Infinito
```

### Hover Smooth Transitions
```
Duración: 300ms
Easing: ease-in-out (suave)
Propiedades: color, border, background
```

---

## 📈 Estadísticas

| Métrica | Valor |
|---------|-------|
| Secciones | 6 |
| Componentes | 6 |
| Servicios mostrados | 4 |
| Imágenes galería | 4 |
| Colores principales | 5 |
| Fuentes | 2 |
| Breakpoints | 3 |
| Animaciones | 3+ |

---

**Landing page profesional lista para producción** ✅
