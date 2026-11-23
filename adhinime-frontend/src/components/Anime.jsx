import { useState } from 'react'
import usePageCss from '../hooks/usePageCss'
import KartuAnime from './KartuAnime'
import { DAFTAR_GENRE } from '../data/animeAwal'

// props: daftarAnime (array), fokusCari (boolean)
function Anime({ daftarAnime, fokusCari }) {
  usePageCss(['/css/anime.css'])

  const [kataCari, setKataCari] = useState('')
  const [genreAktif, setGenreAktif] = useState('All')
  const [urutan, setUrutan] = useState('popular')

  const hasil = daftarAnime
    .filter((a) => a.judul.toLowerCase().includes(kataCari.toLowerCase()))
    .filter((a) => genreAktif === 'All' || a.genre.includes(genreAktif))
    .sort((a, b) => {
      if (urutan === 'az') return a.judul.localeCompare(b.judul)
      if (urutan === 'rating') return (b.rating || 0) - (a.rating || 0)
      return b.popularitas - a.popularitas
    })

  return (
    <main className="anime-page">
      <section className="anime-header">
        <div>
          <h1>Explore Anime</h1>
          <p>
            Temukan anime favoritmu dari berbagai genre, mulai dari anime terbaru hingga anime
            klasik.
          </p>
        </div>

        <div className="anime-search">
          <input
            type="text"
            placeholder="Search anime..."
            value={kataCari}
            autoFocus={fokusCari}
            onChange={(e) => setKataCari(e.target.value)}
          />
        </div>
      </section>

      <section className="anime-filter">
        {['All', ...DAFTAR_GENRE].map((nama) => (
          <button
            key={nama}
            className={genreAktif === nama ? 'filter-active' : ''}
            onClick={() => setGenreAktif(nama)}
          >
            {nama}
          </button>
        ))}
      </section>

      <div className="anime-list-header">
        <h2>All Anime</h2>
        <select value={urutan} onChange={(e) => setUrutan(e.target.value)}>
          <option value="popular">Sort: Popular</option>
          <option value="rating">Sort: Rating</option>
          <option value="az">Sort: A-Z</option>
        </select>
      </div>

      {daftarAnime.length === 0 ? (
        <p className="belum-ada">Belum ada data Anime</p>
      ) : hasil.length === 0 ? (
        <p className="belum-ada">Tidak ada anime yang cocok.</p>
      ) : (
        <section className="anime-catalog" id="catalog">
          {hasil.map((anime) => (
            <KartuAnime key={anime.id} anime={anime} />
          ))}
        </section>
      )}
    </main>
  )
}

export default Anime
