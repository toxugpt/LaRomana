import { useState } from 'react'
import './App.css'

const menuSections = [
  {
    title: 'CUBATAS',
    items: [
      { id: 'cubata-normal', name: 'Normal', price: '6,00€' },
      { id: 'cubata-reserva', name: 'Reserva', price: '7,00€' },
      { id: 'red-bull-original', name: 'Red Bull original', price: '7,00€' },
      { id: 'reserva-red-bull-original', name: 'Reserva Red Bull original', price: '8,00€' },
    ],
  },
  {
    title: 'VINOS',
    items: [
      { id: 'casa-blanco-tinto', name: 'Casa blanco y tinto', price: '1,50€' },
      { id: 'cosechero', name: 'Cosechero', price: '2,30€' },
      { id: 'mencia', name: 'Mencía', price: '3,00€' },
      { id: 'rioja-normal', name: 'Rioja normal', price: '3,00€' },
      { id: 'ribera-del-duero', name: 'Ribera del Duero', price: '3,00€' },
      { id: 'albarino', name: 'Albariño', price: '3,10€' },
      { id: 'godello', name: 'Godello', price: '3,10€' },
      { id: 'ramon-bilbao', name: 'Ramón Bilbao', price: '3,10€' },
      { id: 'luis-canas', name: 'Luis Cañas', price: '3,10€' },
    ],
  },
  {
    title: 'CHUPITO',
    items: [
      { id: 'chupito-pequeno', name: 'Pequeño', price: '2,00€' },
      { id: 'licor-pequeno', name: 'Licor pequeño', price: '2,00€' },
      { id: 'chupito-reserva', name: 'Reserva', price: '3,00€' },
      { id: 'licor-con-hielo', name: 'Licor con hielo', price: '2,50€' },
      { id: 'chupito-con-hielo', name: 'Con hielo', price: '3,50€' },
      { id: 'con-hielo-reserva', name: 'Con hielo reserva', price: '4,50€' },
    ],
  },
  {
    title: 'SMOOTHIES',
    items: [
      { id: 'smoothie-frutas', name: 'Arándanos, frutos rojos, fresa, plátano, mango, maracuyá', price: '5,00€' },
      { id: 'smoothie-combinados', name: 'Combinados', price: '5,50€' },
    ],
  },
  {
    title: 'COCTELES',
    items: [
      { id: 'coctel-normal', name: 'Normal', price: '7,50€' },
      { id: 'coctel-sin-alcohol', name: 'Sin alcohol', price: '6,00€' },
    ],
  },
  {
    title: 'VERMUT',
    items: [
      { id: 'martini', name: 'Martini', price: '3,50€' },
      { id: 'petroni', name: 'Petroni', price: '3,30€' },
      { id: 'zaguirre', name: 'Zaguirre', price: '3,60€' },
    ],
  },
  {
    title: 'REFRESCOS',
    items: [
      { id: 'coca-cola-normal', name: 'Coca-Cola normal', price: '2,70€' },
      { id: 'coca-cola-grande', name: 'Coca-Cola grande', price: '2,70€' },
      { id: 'acuarius-naranja', name: 'Acuarius naranja', price: '2,70€' },
      { id: 'acuarius-limon', name: 'Acuarius limón', price: '2,70€' },
      { id: 'nestea', name: 'Nestea', price: '2,70€' },
      { id: 'nestea-maracuya', name: 'Nestea maracuyá', price: '2,70€' },
      { id: 'sprite', name: 'Sprite', price: '2,70€' },
      { id: 'kas-limon', name: 'Kas limón', price: '2,70€' },
      { id: 'kas-naranja', name: 'Kas naranja', price: '2,70€' },
      { id: 'zumos', name: 'Zumos', price: '2,70€' },
      { id: 'mosto', name: 'Mosto', price: '2,70€' },
      { id: 'bitter-kas', name: 'Bitter kas', price: '2,70€' },
      { id: 'tonica', name: 'Tónica', price: '2,70€' },
      { id: 'tonica-bliss', name: 'Tónica bliss', price: '2,70€' },
      { id: 'trina', name: 'Trina', price: '2,70€' },
      { id: 'powerking', name: 'Powerking', price: '2,70€' },
      { id: 'red-bull-refresco', name: 'Red Bull', price: '3,50€' },
      { id: 'monster', name: 'Monster', price: '3,50€' },
    ],
  },
  {
    title: 'AGUAS',
    items: [
      { id: 'agua-normal', name: 'Normal', price: '1,40€' },
      { id: 'agua-con-gas', name: 'Con gas', price: '1,70€' },
      { id: 'agua-litro', name: 'Litro', price: '2,50€' },
    ],
  },
  {
    title: 'LIMONADAS',
    items: [
      { id: 'limonada-fresa', name: 'Fresa', price: '5,00€' },
      { id: 'limonada-cereza', name: 'Cereza', price: '5,00€' },
      { id: 'limonada-hierbabuena', name: 'Hierbabuena', price: '5,00€' },
      { id: 'limonada-mango', name: 'Mango', price: '5,00€' },
      { id: 'limonada-lima', name: 'Lima', price: '5,00€' },
    ],
  },
  {
    title: 'CERVEZA',
    items: [
      { id: 'cana-normal', name: 'Caña normal', price: '2,70€' },
      { id: 'corto', name: 'Corto', price: '2,30€' },
      { id: 'clara-limon', name: 'Clara limón', price: '2,70€' },
      { id: 'cana-1870', name: 'Caña 1870', price: '2,90€' },
      { id: 'cana-1870-grande', name: 'Caña 1870 copa grande', price: '2,90€' },
      { id: 'media-estrella', name: 'Media estrella', price: '2,80€' },
      { id: '1906-mil9', name: '1906 / Mil9', price: '2,80€' },
      { id: 'mahou', name: 'Mahou', price: '2,80€' },
      { id: 'heineken', name: 'Heineken', price: '2,80€' },
      { id: 'damm', name: 'Damm', price: '2,20€' },
      { id: 'sin-gluten', name: 'Sin gluten', price: '2,60€' },
      { id: 'amstel-00', name: 'Amstel 0,0', price: '2,70€' },
      { id: 'media-sin-alcohol', name: 'Media sin alcohol', price: '2,80€' },
      { id: 'tostada-media-00', name: 'Tostada media 0,0', price: '2,80€' },
      { id: 'botellin', name: 'Botellín', price: '2,30€' },
      { id: 'botellin-sin-alcohol', name: 'Botellín sin alcohol', price: '2,30€' },
      { id: 'botellin-tostada', name: 'Botellín tostada', price: '2,30€' },
      { id: 'shandy-mixta', name: 'Shandy o mixta', price: '2,30€' },
      { id: 'coronita', name: 'Coronita', price: '3,00€' },
      { id: 'salitos', name: 'Salitos', price: '3,00€' },
      { id: 'cruzcampo', name: 'Cruzcampo', price: '2,60€' },
      { id: 'desperados', name: 'Desperados', price: '3,00€' },
      { id: 'lagunitas', name: 'Lagunitas', price: '3,50€' },
      { id: 'judas', name: 'Judas', price: '3,50€' },
      { id: 'guinness-lata', name: 'Guinness lata', price: '5,00€' },
      { id: 'paulaner', name: 'Paulaner', price: '5,00€' },
    ],
  },
  {
    title: 'SIDRA',
    items: [
      { id: 'ladron-manzana', name: 'Ladrón manzana', price: '2,80€' },
      { id: 'maedoc', name: 'Maeloc', price: '2,80€' },
    ],
  },
  {
    title: 'CAFÉS',
    items: [
      { id: 'cafe-solo', name: 'Café solo', price: '1,40€' },
      { id: 'cafe-leche-normal', name: 'Café con leche normal', price: '1,50€' },
      { id: 'cafe-leche-grande', name: 'Café con leche grande', price: '1,60€' },
      { id: 'descafeinado', name: 'Descafeinado', price: '1,80€' },
      { id: 'colacao-vaso', name: 'Colacao vaso', price: '2,00€' },
      { id: 'cafe-carolans', name: 'Café carolans', price: '2,60€' },
      { id: 'infusion', name: 'Infusión', price: '1,50€' },
      { id: 'cafe-llevar', name: 'Café para llevar', price: '+0,20€' },
      { id: 'cafe-hielo', name: 'Café con hielo', price: '+0,10€' },
      { id: 'cafe-gotas', name: 'Café con gotas', price: '+0,20€' },
      { id: 'vaso-leche', name: 'Vaso de leche', price: '1,40€' },
    ],
  },
]

const smoothies = [
  { name: 'Arándanos', description: 'Refrescante y antioxidante' },
  { name: 'Frutos rojos', description: 'Mezcla de bayas frescas' },
  { name: 'Fresa', description: 'Dulce y natural' },
  { name: 'Plátano', description: 'Energizante y cremoso' },
  { name: 'Mango', description: 'Tropical y exótico' },
  { name: 'Maracuyá', description: 'Ácido y refrescante' },
]

const cocktails = [
  { name: 'Mojito', description: 'Clásico cubano con menta' },
  { name: 'Margarita', description: 'Tequila con limón' },
  { name: 'Cosmopolitan', description: 'Vodka con cranberry' },
  { name: 'Piña Colada', description: 'Ron con piña' },
  { name: 'Negroni', description: 'Gin con Campari' },
  { name: 'Old Fashioned', description: 'Whisky con azúcar' },
]

function Slider({ items, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className="slider">
      <h3>{title}</h3>
      <div className="slider-container">
        <button className="slider-btn prev" onClick={prevSlide}>‹</button>
        <div className="slider-content">
          <div className="slide">
            <div className="slide-image">
              <span>Imagen pendiente</span>
            </div>
            <div className="slide-info">
              <h4>{items[currentIndex].name}</h4>
              <p>{items[currentIndex].description}</p>
            </div>
          </div>
        </div>
        <button className="slider-btn next" onClick={nextSlide}>›</button>
      </div>
      <div className="slider-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

function WelcomePage({ onEnterMenu }) {
  return (
    <div className="welcome-page">
      <header className="welcome-hero">
        <div className="welcome-content">
          <span className="welcome-eyebrow">Bienvenido a</span>
          <h1 className="welcome-title">La Romana</h1>
          <p className="welcome-subtitle">
            Descubre nuestra selección de bebidas premium en un ambiente único.
          </p>
          <button className="cta-button" onClick={onEnterMenu}>
            Ver Menú Completo
          </button>
        </div>
      </header>

      <section className="featured-section">
        <div className="sliders-container">
          <Slider items={smoothies} title="Nuestros Smoothies" />
          <Slider items={cocktails} title="Cócteles Destacados" />
        </div>
      </section>

      <footer className="welcome-footer">
        <p>Disfruta de una experiencia inolvidable</p>
      </footer>
    </div>
  )
}

function MenuPage() {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="menu-hero">
          <span className="eyebrow">La Romana</span>
          <h1>Carta del Bar</h1>
          <p className="subtitle">
            Menú completo con precios actualizados.
          </p>
        </div>
      </header>

      <main className="menu">
        {menuSections.map((section) => (
          <section key={section.title} className="section">
            <h2>{section.title}</h2>
            <div className="product-grid">
              {section.items.map((item) => (
                <article key={item.id} className="product-card">
                  <div className="product-image">
                    <span>Imagen pendiente</span>
                  </div>
                  <div className="product-info">
                    <div className="product-header">
                      <strong>{item.name}</strong>
                      <span>{item.price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>
          Esta aplicación es una PWA. Instala el menú para consultarlo sin
          conexión después de la primera carga.
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <div className="welcome-page">
        <header className="welcome-hero">
          <div className="welcome-content">
            <span className="welcome-eyebrow">Bienvenido a</span>
            <h1 className="welcome-title">La Romana</h1>
            <p className="welcome-subtitle">
              Descubre nuestra selección de bebidas premium en un ambiente único.
            </p>
          </div>
        </header>

        <section className="featured-section">
          <div className="sliders-container">
            <Slider items={smoothies} title="Nuestros Smoothies" />
            <Slider items={cocktails} title="Cócteles Destacados" />
          </div>
        </section>

        <section className="menu-section">
          <div className="menu-container">
            <h2 className="menu-title">Nuestra Carta Completa</h2>
            {menuSections.map((section) => (
              <section key={section.title} className="section">
                <h3>{section.title}</h3>
                <div className="product-grid">
                  {section.items.map((item) => (
                    <article key={item.id} className="product-card">
                      <div className="product-image">
                        <span>Imagen pendiente</span>
                      </div>
                      <div className="product-info">
                        <div className="product-header">
                          <strong>{item.name}</strong>
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <footer className="welcome-footer">
          <p>Disfruta de una experiencia inolvidable</p>
        </footer>
      </div>
    </div>
  )
}

export default App
