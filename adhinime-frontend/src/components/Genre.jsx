import { useState } from 'react'
import usePageCss from '../hooks/usePageCss'
import { INFO_GENRE, DAFTAR_GENRE, poster, teksEpisode } from '../data/animeAwal'

// props: daftarAnime (array)
function Genre({ daftarAnime }) {
  usePageCss(['/css/genre.css'])

  const [genreAktif, setGenreAktif] = useState('All')

  const tampil =
    genreAktif === 'All' ? daftarAnime : daftarAnime.filter((a) => a.genre.includes(genreAktif))

  return (
    <main className="genre-page">
      <section className="genre-header">
        <span className="section-label">BROWSE</span>
        <h1>Browse by Genre</h1>
        <p>Klik genre favoritmu untuk melihat anime di dalamnya.</p>
      </section>

      <section className="genre-section">
        <div className="genre-grid" id="genre-list">
          {DAFTAR_GENRE.map((nama) => (
            <a
              href="#"
              key={nama}
              className={genreAktif === nama ? 'genre-card genre-active' : 'genre-card'}
              onClick={(e) => {
                e.preventDefault()
                setGenreAktif(nama)
              }}
            >
              <div className="genre-icon">{INFO_GENRE[nama].ikon}</div>
              <div>
                <h2>{nama}</h2>
                <p>{INFO_GENRE[nama].ket}</p>
              </div>
              <span>→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="popular-genre">
        <div className="section-title">
          <div>
            <span className="section-label">ANIME LIST</span>
            <h2>{genreAktif === 'All' ? 'Semua Anime' : 'Anime ' + genreAktif}</h2>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setGenreAktif('All')
            }}
          >
            Tampilkan semua
          </a>
        </div>

        {daftarAnime.length === 0 ? (
          <p className="belum-ada">Belum ada data Anime</p>
        ) : tampil.length === 0 ? (
          <p className="belum-ada">Belum ada anime untuk genre ini.</p>
        ) : (
          <div className="anime-row">
            {tampil.map((anime) => (
              <div className="genre-anime-card" key={anime.id}>
                <div className="anime-poster">
                  <img src={poster(anime)} alt={anime.judul} />
                  <span>{teksEpisode(anime)}</span>
                </div>
                <h4>{anime.judul}</h4>
                <p>{anime.genre.join(' • ')}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Genre
