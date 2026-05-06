import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ConfigSingleton from './utils/ConfigSingleton'
import './App.css'

function App() {
  // Obtener la instancia única del Singleton
  const config = ConfigSingleton.getInstance()

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
