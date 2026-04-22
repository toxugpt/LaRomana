import { useEffect, useState } from 'react'
import { toDataURL } from 'qrcode'
import './App.css'

const menuItems = [
  {
    id: 'espresso',
    name: 'Espresso',
    price: '$3.50',
    description: 'Taza pequeña, intensa y sin leche.',
  },
  {
    id: 'cafe-latte',
    name: 'Café con leche',
    price: '$4.20',
    description: 'Suave, equilibrado y cremoso.',
  },
  {
    id: 'baguette',
    name: 'Baguette',
    price: '$6.00',
    description: 'Pan artesanal con ingredientes frescos.',
  },
  {
    id: 'vino-rojo',
    name: 'Vino tinto',
    price: '$5.50',
    description: 'Copa seleccionada para acompañar la noche.',
  },
]

function App() {
  const [qrSrc, setQrSrc] = useState('')

  useEffect(() => {
    const url = window.location.href
    toDataURL(url, {
      width: 256,
      margin: 1,
      color: { dark: '#000000', light: '#ffffff' },
    })
      .then(setQrSrc)
      .catch(() => setQrSrc(''))
  }, [])

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Carta del Bar</span>
          <h1>Acceso instantáneo a la carta</h1>
          <p className="subtitle">
            PWA optimizada para carga offline y experiencia rápida sin wifi.
          </p>
        </div>

        <aside className="qr-panel">
          <div className="qr-frame">
            {qrSrc ? (
              <img className="qr-code" src={qrSrc} alt="QR de acceso a la carta" />
            ) : (
              <div className="qr-loading">QR cargando...</div>
            )}
          </div>
          <p className="qr-note">Escanea este código para abrir la carta</p>
        </aside>
      </header>

      <main className="menu">
        <section className="section">
          <h2>Menú minimalista</h2>
          <p className="section-copy">
            Las imágenes de producto están reservadas para implementación futura.
          </p>
          <div className="product-grid">
            {menuItems.map((item) => (
              <article key={item.id} className="product-card">
                <div className="product-image">
                  <span>Imagen pendiente</span>
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <strong>{item.name}</strong>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
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

export default App
