import usePageCss from '../hooks/usePageCss'
import { INFO_GENRE, poster, teksRating } from '../data/animeAwal'

function Tren({ nilai }) {
  if (nilai > 0) return <span className="trend-up">↑ {nilai}</span>
  if (nilai < 0) return <span className="trend-down">↓ {Math.abs(nilai)}</span>
  return <span className="trend-same">—</span>
}

// props: daftarAnime (array), onPindah (fungsi)
function Trending({ daftarAnime, onPindah }) {
  usePageCss(['/css/trending.css'])

  const urut = [...daftarAnime].sort((a, b) => b.popularitas - a.popularitas)

  // urutan tampil di podium: #2, #1, #3
  const podium = [
    [urut[1], 'second', '02', 2],
    [urut[0], 'first', '01', 1],
    [urut[2], 'third', '03', 3],
  ].filter((p) => p[0])

  const sisanya = urut.slice(3, 10)

  // hitung genre terbanyak
  const hitung = {}
  daftarAnime.forEach((a) => {
    a.genre.forEach((g) => {
      hitung[g] = (hitung[g] || 0) + 1
    })
  })
  const genreTop = Object.keys(hitung)
    .sort((x, y) => hitung[y] - hitung[x])
    .slice(0, 4)

  return (
    <main className="trending-page">
      <section className="trending-header">
        <h1>Trending Anime</h1>
        <p>Anime yang sedang paling banyak ditonton dan dibicarakan oleh komunitas AdhiNime.</p>
      </section>

      {daftarAnime.length === 0 ? (
        <p className="belum-ada">Belum ada data Anime</p>
      ) : (
        <>
          <section className="top-three">
            {podium.map(([anime, kelas, nomor, peringkat]) => (
              <article className={'top-card ' + kelas} key={anime.id}>
                <div className="rank-number">{nomor}</div>
                <img src={poster(anime)} alt={anime.judul} />
                <div className="top-info">
                  <span className="rank-label">#{peringkat} TRENDING</span>
                  <h2>{anime.judul}</h2>
                  <div className="top-meta">
                    <span>⭐ {teksRating(anime)}</span>
                    <span>{anime.episode === null ? '-' : anime.episode + ' EP'}</span>
                  </div>
                  <p>{anime.genre.join(' • ')}</p>
                </div>
              </article>
            ))}
          </section>

          {sisanya.length > 0 && (
            <section className="trending-list-section">
              <div className="list-heading">
                <div>
                  <span className="page-label">THIS WEEK</span>
                  <h2>Weekly Trending</h2>
                </div>
              </div>

              <div className="ranking-list">
                {sisanya.map((anime, i) => (
                  <article className="ranking-item" key={anime.id}>
                    <span className="ranking-number">{String(i + 4).padStart(2, '0')}</span>
                    <img src={poster(anime)} alt={anime.judul} />
                    <div className="ranking-info">
                      <h3>{anime.judul}</h3>
                      <p>{anime.genre.join(' • ')}</p>
                    </div>
                    <div className="ranking-stat">
                      <span>⭐ {teksRating(anime)}</span>
                      <span>{anime.episode === null ? '-' : anime.episode + ' EP'}</span>
                    </div>
                    <Tren nilai={anime.tren} />
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="trending-genres">
            <div className="list-heading">
              <div>
                <span className="page-label">POPULAR NOW</span>
                <h2>Trending Genres</h2>
              </div>
            </div>

            <div className="genre-grid">
              {genreTop.map((g) => (
                <a
                  href="#"
                  className="genre-card"
                  key={g}
                  onClick={(e) => {
                    e.preventDefault()
                    onPindah('genre')
                  }}
                >
                  <span>{INFO_GENRE[g].ikon}</span>
                  <h3>{g}</h3>
                  <p>{hitung[g]} Anime</p>
                </a>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}

export default Trending
