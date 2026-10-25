import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Anime from './components/Anime'
import Trending from './components/Trending'
import Latest from './components/Latest'
import Genre from './components/Genre'
import Profil from './components/Profil'
import Admin from './components/Admin'
import { animeAwal } from './data/animeAwal'

function App() {
  // State utama: daftar anime disimpan sebagai array
  const [daftarAnime, setDaftarAnime] = useState(animeAwal)
  const [halaman, setHalaman] = useState('home')
  const [role, setRole] = useState('user') // 'user' atau 'admin'
  const [fokusCari, setFokusCari] = useState(false)

  const pindah = (tujuan, cari = false) => {
    setHalaman(tujuan)
    setFokusCari(cari)
    window.scrollTo(0, 0)
  }

  const ubahRole = (roleBaru) => {
    setRole(roleBaru)
    setHalaman(roleBaru === 'admin' ? 'admin' : 'home')
    window.scrollTo(0, 0)
  }

  // ===== CRUD =====
  const tambahAnime = (animeBaru) => {
    setDaftarAnime([animeBaru, ...daftarAnime])
  }

  const ubahAnime = (id, dataBaru) => {
    setDaftarAnime(
      daftarAnime.map((anime) => (anime.id === id ? { ...anime, ...dataBaru } : anime)),
    )
  }

  const hapusAnime = (id) => {
    setDaftarAnime(daftarAnime.filter((anime) => anime.id !== id))
  }

  return (
    <>
      <Header halaman={halaman} role={role} onPindah={pindah} onRole={ubahRole} />

      {halaman === 'home' && <Home daftarAnime={daftarAnime} onPindah={pindah} />}
      {halaman === 'anime' && <Anime daftarAnime={daftarAnime} fokusCari={fokusCari} />}
      {halaman === 'trending' && <Trending daftarAnime={daftarAnime} onPindah={pindah} />}
      {halaman === 'latest' && <Latest daftarAnime={daftarAnime} onPindah={pindah} />}
      {halaman === 'genre' && <Genre daftarAnime={daftarAnime} />}
      {halaman === 'profil' && <Profil role={role} />}
      {halaman === 'admin' && role === 'admin' && (
        <Admin
          daftarAnime={daftarAnime}
          onTambah={tambahAnime}
          onUbah={ubahAnime}
          onHapus={hapusAnime}
        />
      )}

      <Footer />
    </>
  )
}

export default App
