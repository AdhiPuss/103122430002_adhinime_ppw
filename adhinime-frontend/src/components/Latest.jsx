import { useState } from 'react'
import usePageCss from '../hooks/usePageCss'
import { STATUS_ANIME, poster, teksRating } from '../data/animeAwal'

// props: daftarAnime (array), onPindah (fungsi)
function Latest({ daftarAnime, onPindah }) {
  usePageCss(['/css/latest.css'])

  const [urutan, setUrutan] = useState('default')

  const unggulan = daftarAnime.find((a) => a.status === 'baru') || daftarAnime[0]

  const diperbarui = daftarAnime
    .filter((a) => a.episode !== null)
    .slice(0, 8)
    .sort((a, b) => {
      if (urutan === 'az') return a.judul.localeCompare(b.judul)
      if (urutan === 'rating') return (b.rating || 0) - (a.rating || 0)
      return 0
    })

  const baruDitambah = daftarAnime.slice(0, 3)

  return (
    <main className="latest-page">
      <section className="latest-header">
        <div>
          <h1>Latest Anime</h1>
          <p>Temukan anime dan episode terbaru yang baru saja hadir di AdhiNime.</p>
        </div>

        <div className="latest-filter">
          <select value={urutan} onChange={(e) => setUrutan(e.target.value)}>
            <option value="default">Recently Updated</option>
            <option value="rating">Rating</option>
            <option value="az">A - Z</option>
          </select>
        </div>
      </section>

      {!unggulan ? (
        <p className="belum-ada">Belum ada data Anime</p>
      ) : (
        <>
          <section className="latest-featured">
            <div className="featured-image">
              <img src={poster(unggulan)} alt={unggulan.judul} />
            </div>
            <div className="featured-content">
              <span className="new-badge">NEW EPISODE</span>
              <h2>{unggulan.judul}</h2>
              <div className="anime-meta">
                <span>⭐ {teksRating(unggulan)}</span>
                <span>{unggulan.episode === null ? 'Not yet aired' : unggulan.episode + ' Episodes'}</span>
                <span>{STATUS_ANIME[unggulan.status].label}</span>
                <span>TV</span>
              </div>
              <p>{unggulan.sinopsis || 'Belum ada sinopsis.'}</p>
              <div className="featured-buttons">
                <a href="#" className="watch-btn" onClick={(e) => e.preventDefault()}>▶ Watch Now</a>
                <a href="#" className="detail-btn" onClick={(e) => e.preventDefault()}>View Detail</a>
              </div>
            </div>
          </section>

          <section className="latest-section">
            <div className="section-title">
              <div>
                <span className="section-label">JUST UPDATED</span>
                <h2>Recently Updated</h2>
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  onPindah('anime')
                }}
              >
                View All →
              </a>
            </div>

            <div className="latest-grid" id="latest-grid">
              {diperbarui.map((anime) => (
                <div className="latest-card" key={anime.id}>
                  <div className="poster-wrapper">
                    <img src={poster(anime)} alt={anime.judul} />
                    <span className="episode-badge">EP {anime.episode}</span>
                    <span className="status-badge">{STATUS_ANIME[anime.status].label}</span>
                  </div>
                  <div className="latest-info">
                    <h3>{anime.judul}</h3>
                    <div className="card-meta">
                      <span>⭐ {teksRating(anime)}</span>
                      <span>EP {anime.episode}</span>
                    </div>
                    <p>{anime.genre.join(' • ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="new-section">
            <div className="section-title">
              <div>
                <span className="section-label">NEW ARRIVALS</span>
                <h2>Newly Added Anime</h2>
              </div>
            </div>

            <div className="new-list">
              {baruDitambah.map((anime, i) => (
                <div className="new-item" key={anime.id}>
                  <span className="new-number">{String(i + 1).padStart(2, '0')}</span>
                  <img src={poster(anime)} alt={anime.judul} />
                  <div className="new-info">
                    <h3>{anime.judul}</h3>
                    <p>{anime.genre.join(' • ')}</p>
                  </div>
                  <span className="new-date">Recently Added</span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}

export default Latest
