/**
 * ConfigSingleton - Patrón Singleton para gestionar la configuración global
 * Esta clase garantiza que solo exista una instancia durante toda la aplicación
 */

class ConfigSingleton {
  static instance;

  constructor() {
    if (ConfigSingleton.instance) {
      return ConfigSingleton.instance;
    }

    this.config = {
      // Información de la empresa
      company: {
        name: 'BARBER ONE',
        tagline: 'Mi mundo, Tu lugar',
        phone: '0383 495-3696',
        address: 'Pje. Argentino, K4700',
        city: 'San Fernando del Valle de Catamarca',
        hours: 'Lunes a Sábado: 10:00 - 20:00',
      },

      // Colores del tema (basados en el diseño original)
      theme: {
        colors: {
          primary: '#f2ca50',
          primaryFixed: '#ffe088',
          primaryFixedDim: '#e9c349',
          inversePrimary: '#735c00',
          surface: '#131313',
          surfaceContainer: '#201f1f',
          surfaceContainerHighest: '#353534',
          surfaceContainerLowest: '#0e0e0e',
          onBackground: '#e5e2e1',
          onSurface: '#e5e2e1',
          onSurfaceVariant: '#d0c5af',
          outline: '#99907c',
          outlineVariant: '#4d4635',
          secondary: '#c8c6c5',
          tertiary: '#daccc2',
          background: '#131313',
        },
      },

      // Redes sociales
      social: {
        instagram: 'https://instagram.com/barberone',
        whatsapp: 'https://wa.me/5493834953696',
        facebook: 'https://facebook.com/barberone',
      },

      // Servicios
      services: [
        {
          icon: 'sanitizer',
          title: 'Sanitario impecable y desinfectado',
        },
        {
          icon: 'event_available',
          title: 'Cita previa recomendada',
        },
        {
          icon: 'contactless',
          title: 'Pagos móviles (NFC) y tarjetas',
        },
        {
          icon: 'child_care',
          title: 'Ideal para ir con niños',
        },
      ],
    };

    ConfigSingleton.instance = this;
  }

  /**
   * Obtiene la instancia única del Singleton
   */
  static getInstance() {
    if (!ConfigSingleton.instance) {
      new ConfigSingleton();
    }
    return ConfigSingleton.instance;
  }

  /**
   * Obtiene la configuración completa
   */
  getConfig() {
    return this.config;
  }

  /**
   * Obtiene un valor específico de la configuración
   */
  get(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this.config);
  }

  /**
   * Actualiza un valor en la configuración
   */
  set(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), this.config);
    target[lastKey] = value;
  }
}

export default ConfigSingleton;