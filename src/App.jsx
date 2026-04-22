import { useState } from 'react'
import './App.css'

const featuredSlides = [
  {
    id: 'slide-smoothie-berries',
    title: 'Smoothie de arandanos y frutos rojos',
    subtitle:
      'Una mezcla fresca, afrutada y vibrante con el sello refrescante de La Romana.',
    badge: 'Smoothies',
    accent: 'from-emerald',
  },
  {
    id: 'slide-cocktail-mojito',
    title: 'Mojito clasico',
    subtitle:
      'Hierbabuena, lima y una presentacion limpia para una copa que siempre funciona.',
    badge: 'Cocteles',
    accent: 'from-amber',
  },
  {
    id: 'slide-smoothie-tropical',
    title: 'Smoothie tropical de mango y maracuya',
    subtitle:
      'Perfil suave, exotico y veraniego para una de las propuestas mas atractivas de la barra.',
    badge: 'Smoothies',
    accent: 'from-burgundy',
  },
  {
    id: 'slide-cocktail-margarita',
    title: 'Margarita de la casa',
    subtitle:
      'Una referencia directa a la cocteleria del bar, servida con imagen elegante y sabor definido.',
    badge: 'Cocteles',
    accent: 'from-emerald',
  },
]

const menuSections = [
  {
    title: 'Cubatas',
    items: [
      { id: 'cubata-normal', name: 'Normal', price: '6,00 EUR' },
      { id: 'cubata-reserva', name: 'Reserva', price: '7,00 EUR' },
      { id: 'red-bull-original', name: 'Red Bull original', price: '7,00 EUR' },
      { id: 'reserva-red-bull-original', name: 'Reserva + Red Bull original', price: '8,00 EUR' },
    ],
  },
  {
    title: 'Vinos',
    items: [
      { id: 'casa-blanco-tinto', name: 'Casa blanco y tinto', price: '1,50 EUR' },
      { id: 'cosechero', name: 'Cosechero', price: '2,30 EUR' },
      { id: 'mencia', name: 'Mencia', price: '3,00 EUR' },
      { id: 'rioja-normal', name: 'Rioja normal', price: '3,00 EUR' },
      { id: 'ribera-del-duero', name: 'Ribera del Duero', price: '3,00 EUR' },
      { id: 'albarino', name: 'Albarino', price: '3,10 EUR' },
      { id: 'godello', name: 'Godello', price: '3,10 EUR' },
      { id: 'ramon-bilbao', name: 'Ramon Bilbao', price: '3,10 EUR' },
      { id: 'luis-canas', name: 'Luis Canas', price: '3,10 EUR' },
    ],
  },
  {
    title: 'Chupito',
    items: [
      { id: 'chupito-pequeno', name: 'Pequeno', price: '2,00 EUR' },
      { id: 'licor-pequeno', name: 'Licor pequeno', price: '2,00 EUR' },
      { id: 'chupito-reserva', name: 'Reserva', price: '3,00 EUR' },
      { id: 'licor-con-hielo', name: 'Licor con hielo', price: '2,50 EUR' },
      { id: 'chupito-con-hielo', name: 'Con hielo', price: '3,50 EUR' },
      { id: 'con-hielo-reserva', name: 'Con hielo reserva', price: '4,50 EUR' },
    ],
  },
  {
    title: 'Smoothies',
    items: [
      { id: 'smoothie-frutas', name: 'Arandanos, frutos rojos, fresa, platano, mango, maracuya', price: '5,00 EUR' },
      { id: 'smoothie-combinados', name: 'Combinados', price: '5,50 EUR' },
    ],
  },
  {
    title: 'Cocteles',
    items: [
      { id: 'coctel-normal', name: 'Normal', price: '7,50 EUR' },
      { id: 'coctel-sin-alcohol', name: 'Sin alcohol', price: '6,00 EUR' },
    ],
  },
  {
    title: 'Vermut',
    items: [
      { id: 'martini', name: 'Martini', price: '3,50 EUR' },
      { id: 'petroni', name: 'Petroni', price: '3,30 EUR' },
      { id: 'zaguirre', name: 'Zaguirre', price: '3,60 EUR' },
    ],
  },
  {
    title: 'Refrescos',
    items: [
      { id: 'coca-cola-normal', name: 'Coca-Cola normal', price: '2,70 EUR' },
      { id: 'coca-cola-grande', name: 'Coca-Cola grande', price: '2,70 EUR' },
      { id: 'acuarius-naranja', name: 'Acuarius naranja', price: '2,70 EUR' },
      { id: 'acuarius-limon', name: 'Acuarius limon', price: '2,70 EUR' },
      { id: 'nestea', name: 'Nestea', price: '2,70 EUR' },
      { id: 'sprite', name: 'Sprite', price: '2,70 EUR' },
      { id: 'kas-limon', name: 'Kas limon', price: '2,70 EUR' },
      { id: 'kas-naranja', name: 'Kas naranja', price: '2,70 EUR' },
      { id: 'zumos', name: 'Zumos', price: '2,70 EUR' },
      { id: 'mosto', name: 'Mosto', price: '2,70 EUR' },
      { id: 'bitter-kas', name: 'Bitter Kas', price: '2,70 EUR' },
      { id: 'tonica', name: 'Tonica', price: '2,70 EUR' },
      { id: 'tonica-bliss', name: 'Tonica Bliss', price: '2,70 EUR' },
      { id: 'trina', name: 'Trina', price: '2,70 EUR' },
      { id: 'powerking', name: 'Powerking', price: '2,70 EUR' },
      { id: 'red-bull-refresco', name: 'Red Bull', price: '3,50 EUR' },
      { id: 'monster', name: 'Monster', price: '3,50 EUR' },
    ],
  },
  {
    title: 'Aguas',
    items: [
      { id: 'agua-normal', name: 'Normal', price: '1,40 EUR' },
      { id: 'agua-con-gas', name: 'Con gas', price: '1,70 EUR' },
      { id: 'agua-litro', name: 'Litro', price: '2,50 EUR' },
    ],
  },
  {
    title: 'Limonadas',
    items: [
      { id: 'limonada-fresa', name: 'Fresa', price: '5,00 EUR' },
      { id: 'limonada-cereza', name: 'Cereza', price: '5,00 EUR' },
      { id: 'limonada-hierbabuena', name: 'Hierbabuena', price: '5,00 EUR' },
      { id: 'limonada-mango', name: 'Mango', price: '5,00 EUR' },
      { id: 'limonada-lima', name: 'Lima', price: '5,00 EUR' },
    ],
  },
  {
    title: 'Cerveza',
    items: [
      { id: 'cana-normal', name: 'Cana normal', price: '2,70 EUR' },
      { id: 'corto', name: 'Corto', price: '2,30 EUR' },
      { id: 'clara-limon', name: 'Clara limon', price: '2,70 EUR' },
      { id: 'cana-1870', name: 'Cana 1870', price: '2,90 EUR' },
      { id: 'cana-1870-grande', name: 'Cana 1870 copa grande', price: '2,90 EUR' },
      { id: 'media-estrella', name: 'Media estrella', price: '2,80 EUR' },
      { id: '1906-mil9', name: '1906 / Mil9', price: '2,80 EUR' },
      { id: 'mahou', name: 'Mahou', price: '2,80 EUR' },
      { id: 'heineken', name: 'Heineken', price: '2,80 EUR' },
      { id: 'damm', name: 'Damm', price: '2,20 EUR' },
      { id: 'sin-gluten', name: 'Sin gluten', price: '2,60 EUR' },
      { id: 'amstel-00', name: 'Amstel 0,0', price: '2,70 EUR' },
      { id: 'media-sin-alcohol', name: 'Media sin alcohol', price: '2,80 EUR' },
      { id: 'tostada-media-00', name: 'Tostada media 0,0', price: '2,80 EUR' },
      { id: 'botellin', name: 'Botellin', price: '2,30 EUR' },
      { id: 'botellin-sin-alcohol', name: 'Botellin sin alcohol', price: '2,30 EUR' },
      { id: 'botellin-tostada', name: 'Botellin tostada', price: '2,30 EUR' },
      { id: 'shandy-mixta', name: 'Shandy o mixta', price: '2,30 EUR' },
      { id: 'coronita', name: 'Coronita', price: '3,00 EUR' },
      { id: 'salitos', name: 'Salitos', price: '3,00 EUR' },
      { id: 'cruzcampo', name: 'Cruzcampo', price: '2,60 EUR' },
      { id: 'desperados', name: 'Desperados', price: '3,00 EUR' },
      { id: 'lagunitas', name: 'Lagunitas', price: '3,50 EUR' },
      { id: 'judas', name: 'Judas', price: '3,50 EUR' },
      { id: 'guinness-lata', name: 'Guinness lata', price: '5,00 EUR' },
      { id: 'paulaner', name: 'Paulaner', price: '5,00 EUR' },
    ],
  },
  {
    title: 'Sidra',
    items: [
      { id: 'ladron-manzana', name: 'Ladron de manzana', price: '2,80 EUR' },
      { id: 'maedoc', name: 'Maeloc', price: '2,80 EUR' },
    ],
  },
  {
    title: 'Cafes',
    items: [
      { id: 'cafe-solo', name: 'Cafe solo', price: '1,40 EUR' },
      { id: 'cafe-leche-normal', name: 'Cafe con leche normal', price: '1,50 EUR' },
      { id: 'cafe-leche-grande', name: 'Cafe con leche grande', price: '1,60 EUR' },
      { id: 'descafeinado', name: 'Descafeinado', price: '1,80 EUR' },
      { id: 'colacao-vaso', name: 'Colacao vaso', price: '2,00 EUR' },
      { id: 'cafe-carolans', name: 'Cafe Carolans', price: '2,60 EUR' },
      { id: 'infusion', name: 'Infusion', price: '1,50 EUR' },
      { id: 'cafe-llevar', name: 'Cafe para llevar', price: '+0,20 EUR' },
      { id: 'cafe-hielo', name: 'Cafe con hielo', price: '+0,10 EUR' },
      { id: 'cafe-gotas', name: 'Cafe con gotas', price: '+0,20 EUR' },
      { id: 'vaso-leche', name: 'Vaso de leche', price: '1,40 EUR' },
    ],
  },
]

function HeroCarousel() {
  return (
    <div
      id="featuredCarousel"
      className="carousel slide carousel-fade hero-carousel"
      data-bs-ride="carousel"
      data-bs-interval="3800"
      data-bs-pause="false"
    >
      <div className="carousel-indicators">
        {featuredSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#featuredCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner overflow-hidden rounded-5">
        {featuredSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <div className={`hero-slide ${slide.accent}`}>
              <div className="hero-slide__overlay" />
              <div className="container position-relative py-5">
                <div className="row min-vh-60 align-items-center">
                  <div className="col-lg-7">
                    <span className="badge rounded-pill text-bg-light hero-badge">
                      {slide.badge}
                    </span>
                    <h1 className="display-3 fw-semibold mt-3 hero-title">
                      {slide.title}
                    </h1>
                    <p className="lead hero-copy mb-0">{slide.subtitle}</p>
                  </div>
                  <div className="col-lg-5 mt-4 mt-lg-0">
                    <div className="hero-glass card border-0 shadow-lg ms-lg-auto">
                      <div className="card-body p-4 p-md-5 text-center">
                        <h2 className="slider-brand mb-0">La Romana</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WelcomePage({ onEnterMenu }) {
  return (
    <div className="pb-5">
      <HeroCarousel />

      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-4">
            <div className="card feature-card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <span className="feature-kicker">Reservas</span>
                <h3 className="h4 mt-2">Tu mesa lista para cada momento</h3>
                <p className="text-secondary mb-0">
                  Espacio pensado para reservas, encuentros especiales y noches
                  donde cada detalle acompana la experiencia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card feature-card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <span className="feature-kicker">Ambiente</span>
                <h3 className="h4 mt-2">Una atmosfera elegante y cercana</h3>
                <p className="text-secondary mb-0">
                  Cocteleria, buena musica y una imagen cuidada para disfrutar
                  del bar con personalidad propia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card feature-card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <span className="feature-kicker">Bar Experience</span>
                <h3 className="h4 mt-2">Cocteles, copas y noches memorables</h3>
                <p className="text-secondary mb-0">
                  Una propuesta enfocada en servicio, barra premium y momentos
                  para compartir desde la primera copa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            className="btn btn-light btn-lg rounded-pill px-4 shadow-sm"
            onClick={onEnterMenu}
          >
            Ver menu completo
          </button>
        </div>
      </section>
    </div>
  )
}

function MenuSectionCard({ section }) {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <article className="card menu-card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="menu-card__header p-4">
            <p className="menu-card__eyebrow mb-2">La Romana</p>
            <h2 className="h4 mb-0">{section.title}</h2>
          </div>
          <ul className="list-group list-group-flush">
            {section.items.map((item) => (
              <li
                key={item.id}
                className="list-group-item menu-card__item d-flex justify-content-between align-items-start gap-3"
              >
                <div>
                  <strong className="d-block">{item.name}</strong>
                  <span className="small text-secondary">Seleccion de barra</span>
                </div>
                <span className="price-pill">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  )
}

function MenuPage({ onBackToWelcome }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4 mb-4 mb-lg-5">
        <div className="col-lg-8">
          <span className="badge text-bg-dark rounded-pill px-3 py-2">
            Carta oficial
          </span>
          <h1 className="display-5 fw-semibold mt-3 mb-3 text-white">
            Carta del Bar La Romana
          </h1>
          <p className="lead text-secondary mb-0">
            Una vista clara y profesional del menu, optimizada para lectura
            comoda y consulta rapida.
          </p>
        </div>
        <div className="col-lg-4 text-lg-end">
          <button
            className="btn btn-outline-light rounded-pill px-4"
            onClick={onBackToWelcome}
          >
            Volver al inicio
          </button>
        </div>
      </div>

      <div className="row g-4">
        {menuSections.map((section) => (
          <MenuSectionCard key={section.title} section={section} />
        ))}
      </div>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer mt-auto">
      <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0">
          Copyright 2026 La Romana. Todos los derechos reservados.
        </p>
        <p className="mb-0 text-secondary">
          Repositorio y web protegidos por copyright.
        </p>
      </div>
    </footer>
  )
}

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="app-shell d-flex flex-column">
      {showMenu ? (
        <MenuPage onBackToWelcome={() => setShowMenu(false)} />
      ) : (
        <WelcomePage onEnterMenu={() => setShowMenu(true)} />
      )}
      <SiteFooter />
    </div>
  )
}

export default App
