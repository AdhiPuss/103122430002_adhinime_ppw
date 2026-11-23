import { useState } from 'react'

// props: halaman, role, onPindah, onRole
function Header({ halaman, role, onPindah, onRole }) {
  const [menuTerbuka, setMenuTerbuka] = useState(false)

  const menu = [
    ['home', 'Home'],
    ['anime', 'Anime'],
    ['trending', 'Trending'],
    ['latest', 'Latest'],
    ['genre', 'Genre'],
  ]
  if (role === 'admin') {
    menu.push(['admin', 'Admin'])
  }

  const klik = (e, tujuan, cari = false) => {
    e.preventDefault()
    onPindah(tujuan, cari)
    setMenuTerbuka(false)
  }

  return (
    <header className="navbar">
      <div className="logo">AdhiNime</div>

      <nav id="menu" className={menuTerbuka ? 'open' : ''}>
        {menu.map(([kode, label]) => (
          <a
            key={kode}
            href="#"
            className={halaman === kode ? 'active' : ''}
            onClick={(e) => klik(e, kode)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className={role === 'admin' ? 'btn-role aktif' : 'btn-role'}
          onClick={() => onRole(role === 'admin' ? 'user' : 'admin')}
        >
          {role === 'admin' ? '🛠 Keluar Admin' : '🛠 Masuk Admin'}
        </button>
        <a href="#" title="Cari anime" onClick={(e) => klik(e, 'anime', true)}>🔍</a>
        <a href="#" title="Profil" onClick={(e) => klik(e, 'profil')}>👤</a>
        <button id="menu-btn" onClick={() => setMenuTerbuka(!menuTerbuka)}>☰</button>
      </div>
    </header>
  )
}

export default Header
