import { STATUS_ANIME, poster, teksRating } from '../data/animeAwal'

// props: daftar (array), onEdit (fungsi), onHapus (fungsi)
function TabelAnime({ daftar, onEdit, onHapus }) {
  // Conditional rendering: daftar kosong
  if (daftar.length === 0) {
    return <p className="belum-ada">Belum ada data Anime</p>
  }

  return (
    <section className="tabel-box">
      <table className="tabel-anime">
        <thead>
          <tr>
            <th>Poster</th>
            <th>Judul</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Episode</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {daftar.map((anime) => (
            <tr key={anime.id}>
              <td><img className="thumb" src={poster(anime)} alt={anime.judul} /></td>
              <td className="judul-sel">{anime.judul}</td>
              <td>{anime.genre.join(', ')}</td>
              <td>⭐ {teksRating(anime)}</td>
              <td>{anime.episode === null ? '-' : anime.episode}</td>
              <td>{STATUS_ANIME[anime.status].label}</td>
              <td>
                <div className="aksi">
                  <button className="btn-edit-kecil" onClick={() => onEdit(anime)}>Edit</button>
                  <button className="btn-hapus-kecil" onClick={() => onHapus(anime)}>Hapus</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TabelAnime
