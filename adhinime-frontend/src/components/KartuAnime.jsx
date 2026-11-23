import { STATUS_ANIME, poster, teksRating, teksEpisode, teksJumlahEp } from '../data/animeAwal'

// props: anime (object)
function KartuAnime({ anime }) {
  const status = STATUS_ANIME[anime.status]

  return (
    <article className="anime-item">
      <div className="catalog-poster">
        <img src={poster(anime)} alt={anime.judul} />
        <span className={'status ' + status.kelas}>{status.label}</span>
        <span className="episode-badge">{teksEpisode(anime)}</span>
      </div>
      <div className="catalog-info">
        <h3>{anime.judul}</h3>
        <div className="rating">
          <span>⭐ {teksRating(anime)}</span>
          <span>{teksJumlahEp(anime)}</span>
        </div>
        <p>{anime.genre.join(' • ')}</p>
      </div>
    </article>
  )
}

export default KartuAnime
