import { useState } from 'react'
import { DAFTAR_GENRE, STATUS_ANIME } from '../data/animeAwal'

// props: dataAwal (anime yang diedit atau null), onSimpan (fungsi), onBatal (fungsi)
function FormAnime({ dataAwal, onSimpan, onBatal }) {
  // Controlled component: semua input disimpan di state
  const [judul, setJudul] = useState(dataAwal ? dataAwal.judul : '')
  const [genre, setGenre] = useState(dataAwal ? dataAwal.genre : [])
  const [rating, setRating] = useState(
    dataAwal && dataAwal.rating !== null ? String(dataAwal.rating) : '',
  )
  const [episode, setEpisode] = useState(
    dataAwal && dataAwal.episode !== null ? String(dataAwal.episode) : '',
  )
  const [status, setStatus] = useState(dataAwal ? dataAwal.status : 'ongoing')
  const [popularitas, setPopularitas] = useState(dataAwal ? String(dataAwal.popularitas) : '50')
  const [gambar, setGambar] = useState(dataAwal ? dataAwal.gambar : '')
  const [sinopsis, setSinopsis] = useState(dataAwal ? dataAwal.sinopsis : '')
  const [pesanError, setPesanError] = useState('')

  const pilihGenre = (nama) => {
    if (genre.includes(nama)) {
      setGenre(genre.filter((g) => g !== nama))
    } else {
      setGenre([...genre, nama])
    }
  }

  const kosongkan = () => {
    setJudul('')
    setGenre([])
    setRating('')
    setEpisode('')
    setStatus('ongoing')
    setPopularitas('50')
    setGambar('')
    setSinopsis('')
    setPesanError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (judul.trim() === '') {
      setPesanError('Judul anime tidak boleh kosong.')
      return
    }
    if (genre.length === 0) {
      setPesanError('Pilih minimal satu genre.')
      return
    }

    onSimpan({
      judul: judul.trim(),
      gambar: gambar.trim(),
      genre: genre,
      rating: rating === '' ? null : Number(rating),
      episode: episode === '' ? null : Number(episode),
      status: status,
      popularitas: popularitas === '' ? 0 : Number(popularitas),
      sinopsis: sinopsis.trim(),
    })

    if (!dataAwal) {
      kosongkan()
    }
  }

  return (
    <section className="admin-form-box">
      <h2>{dataAwal ? 'Edit Anime' : 'Tambah Anime'}</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="admin-row">
          <label>
            Judul
            <input
              type="text"
              placeholder="Contoh: Dandadan Season 2"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          </label>

          <label>
            Rating (0 - 10)
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              placeholder="8.5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>

          <label>
            Episode
            <input
              type="number"
              min="0"
              placeholder="12"
              value={episode}
              onChange={(e) => setEpisode(e.target.value)}
            />
          </label>

          <label>
            Status
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              {Object.keys(STATUS_ANIME).map((kode) => (
                <option key={kode} value={kode}>
                  {STATUS_ANIME[kode].label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Skor Trending (0-100)
            <input
              type="number"
              min="0"
              max="100"
              value={popularitas}
              onChange={(e) => setPopularitas(e.target.value)}
            />
          </label>
        </div>

        <label>
          Poster (path atau URL, kosongkan untuk gambar default)
          <input
            type="text"
            placeholder="/asset/img/nama-file.jpg"
            value={gambar}
            onChange={(e) => setGambar(e.target.value)}
          />
        </label>

        <label>
          Sinopsis
          <textarea
            placeholder="Ceritakan singkat tentang anime ini..."
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
          />
        </label>

        <div className="genre-pilihan">
          <span>Genre:</span>
          {DAFTAR_GENRE.map((nama) => (
            <button
              key={nama}
              type="button"
              className={genre.includes(nama) ? 'chip chip-aktif' : 'chip'}
              onClick={() => pilihGenre(nama)}
            >
              {nama}
            </button>
          ))}
        </div>

        {pesanError !== '' && <p className="pesan-error">{pesanError}</p>}

        <div className="form-tombol">
          <button type="submit" className="btn-tambah">
            {dataAwal ? 'Simpan Perubahan' : 'Tambah'}
          </button>
          {dataAwal && (
            <button type="button" className="btn-batal" onClick={onBatal}>
              Batal
            </button>
          )}
        </div>
      </form>
    </section>
  )
}

export default FormAnime
