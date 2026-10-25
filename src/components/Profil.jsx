import { useState } from 'react'
import usePageCss from '../hooks/usePageCss'

// props: role ('user' atau 'admin')
function Profil({ role }) {
  usePageCss(['/css/profil.css'])

  const [nama, setNama] = useState('Adhi')
  const [formTerbuka, setFormTerbuka] = useState(false)
  const [namaBaru, setNamaBaru] = useState('')

  const simpan = () => {
    if (namaBaru.trim() === '') {
      alert('Nama tidak boleh kosong!')
      return
    }
    setNama(namaBaru.trim())
    setNamaBaru('')
    setFormTerbuka(false)
  }

  return (
    <main className="profil-page">
      <section className="profil-header">
        <h1>Profil Saya</h1>
        <p>Kelola informasi akun dan lihat anime favoritmu dalam satu tempat.</p>
      </section>

      <section className="profil-grid">
        <aside className="profil-card">
          <img className="avatar" src="https://i.redd.it/bsws2ehicdjg1.jpg" alt="Foto profil" />
          <h2 id="nama-profil">{nama}</h2>
          <p className="role">{role === 'admin' ? 'Admin' : 'Pengguna'}</p>
          <span className="badge-title">Wibu Sepuh</span>

          <div className="info-list">
            <div><small>Username</small><strong>PussKanae</strong></div>
            <div><small>Email</small><strong>adhipuspo@gmail.com</strong></div>
            <div><small>Bergabung Sejak</small><strong>Oktober 2026</strong></div>
          </div>

          <button className="btn-edit" onClick={() => setFormTerbuka(!formTerbuka)}>
            Edit Profil
          </button>

          <div id="form-edit" style={{ display: formTerbuka ? 'block' : 'none' }}>
            <input
              type="text"
              placeholder="Nama baru"
              value={namaBaru}
              onChange={(e) => setNamaBaru(e.target.value)}
            />
            <button className="btn-edit" onClick={simpan}>Simpan</button>
          </div>
        </aside>

        <div className="profil-right">
          <div className="stat-grid">
            <div className="stat-box"><p>Anime Ditonton</p><strong>24</strong></div>
            <div className="stat-box"><p>Watchlist</p><strong>12</strong></div>
            <div className="stat-box"><p>Favorit</p><strong>8</strong></div>
          </div>

          <div className="profil-box">
            <h2>Anime Favorit</h2>
            <div className="fav-item">
              <img src="/asset/img/kusuriya.jpg" alt="Kusuriya" />
              <div><h3>Kusuriya no Hitorigoto</h3><p>Drama • Mystery</p></div>
              <span className="fav-rating">★ 8.9</span>
            </div>
            <div className="fav-item">
              <img src="/asset/img/oshi.jpg" alt="Oshi No Ko" />
              <div><h3>Oshi No Ko</h3><p>Drama • Reincarnation</p></div>
              <span className="fav-rating">★ 8.6</span>
            </div>
          </div>

          <div className="profil-box">
            <h2>Pengaturan Akun</h2>
            <a href="#" className="setting-item" onClick={(e) => e.preventDefault()}>
              <div>Informasi Pribadi<small>Perbarui informasi profil</small></div>
              <span>→</span>
            </a>
            <a href="#" className="setting-item" onClick={(e) => e.preventDefault()}>
              <div>Preferensi Anime<small>Atur genre yang kamu sukai</small></div>
              <span>→</span>
            </a>
            <a href="#" className="setting-item" onClick={(e) => e.preventDefault()}>
              <div>Privasi Akun<small>Kelola preferensi privasi</small></div>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profil
