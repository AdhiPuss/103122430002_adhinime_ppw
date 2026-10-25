import { useState } from 'react'
import { STATUS_ANIME, poster, teksRating, teksJumlahEp } from '../data/animeAwal'

// props: daftarAnime (array), onPindah (fungsi)
function Home({ daftarAnime, onPindah }) {
  const [terbuka, setTerbuka] = useState(false)
  const [masukList, setMasukList] = useState(false)

  const urut = [...daftarAnime].sort((a, b) => b.popularitas - a.popularitas)
  const unggulan = urut[0]
  const trending = urut.slice(1, 6)

  if (!unggulan) {
    return (
      <main>
        <section className="anime-section">
          <p className="belum-ada">Belum ada data Anime</p>
        </section>
      </main>
    )
  }

  const sinopsis = unggulan.sinopsis || 'Belum ada sinopsis.'
  const panjang = sinopsis.length > 140
  const teksSinopsis = panjang && !terbuka ? sinopsis.slice(0, 140) + '...' : sinopsis

  return (
    <main>
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f0f14 10%, rgba(15,15,20,0.5)), url('/asset/img/hero.jpg')",
        }}
      >
        <div className="hero-content">
          <span className="hero-label">#1 TRENDING ANIME</span>
          <h1>{unggulan.judul}</h1>

          <div className="anime-info">
            <span>⭐ {teksRating(unggulan)}</span>
            <span>{unggulan.episode === null ? 'Not yet aired' : unggulan.episode + ' Episodes'}</span>
            <span>{STATUS_ANIME[unggulan.status].label}</span>
            <span>TV</span>
          </div>

          <p className="description">{teksSinopsis}</p>

          {panjang && (
            <a
              href="#"
              className="read-more"
              onClick={(e) => {
                e.preventDefault()
                setTerbuka(!terbuka)
              }}
            >
              {terbuka ? 'Sembunyikan' : 'Selengkapnya →'}
            </a>
          )}

          <div className="hero-buttons">
            <button className="btn-primary">▶ Watch Now</button>
            <button className="btn-secondary btn-list" onClick={() => setMasukList(!masukList)}>
              {masukList ? '✓ Added' : '+ Add to List'}
            </button>
          </div>
        </div>
      </section>

      <section className="anime-section">
        <div className="section-title">
          <h2>🔥 Trending Anime</h2>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onPindah('trending')
            }}
          >
            View All →
          </a>
        </div>

        <div className="anime-grid">
          {trending.map((anime) => (
            <div className="anime-card" key={anime.id}>
              <div className="anime-poster">
                <img src={poster(anime)} alt={anime.judul} />
                <span className="episode">{anime.episode === null ? 'Unknown' : 'EP ' + anime.episode}</span>
              </div>
              <div className="anime-details">
                <h3>{anime.judul}</h3>
                <div className="card-info">
                  <span>⭐ {teksRating(anime)}</span>
                  <span>{anime.episode === null ? 'Not yet aired' : teksJumlahEp(anime)}</span>
                </div>
                <p>{anime.genre.join(' • ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
