import { useState } from 'react'
import usePageCss from '../hooks/usePageCss'
import FormAnime from './FormAnime'
import TabelAnime from './TabelAnime'


function Admin({ daftarAnime, onTambah, onUbah, onHapus }) {
  usePageCss(['/css/admin.css'])

  const [animeDiedit, setAnimeDiedit] = useState(null)

  const mulaiEdit = (anime) => {
    setAnimeDiedit(anime)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const hapus = (anime) => {
    if (window.confirm('Hapus "' + anime.judul + '"?')) {
      onHapus(anime.id)
      if (animeDiedit && animeDiedit.id === anime.id) {
        setAnimeDiedit(null)
      }
    }
  }

  const simpan = (data) => {
    if (animeDiedit) {
      onUbah(animeDiedit.id, data)
      setAnimeDiedit(null)
    } else {
      onTambah({ id: Date.now(), tren: 0, ...data })
    }
  }

  const jumlahOngoing = daftarAnime.filter((a) => a.status === 'ongoing').length
  const jumlahTamat = daftarAnime.filter((a) => a.status === 'tamat').length

  return (
    <main className="admin-page">
      <section className="admin-header">
        <h1>Dashboard Admin</h1>
        <p>Kelola data anime: tambah, ubah, dan hapus.</p>
      </section>

      <section className="admin-stats">
        <div className="admin-stat"><p>Total Anime</p><strong>{daftarAnime.length}</strong></div>
        <div className="admin-stat"><p>Ongoing</p><strong>{jumlahOngoing}</strong></div>
        <div className="admin-stat"><p>Tamat</p><strong>{jumlahTamat}</strong></div>
        <div className="admin-stat">
          <p>Mode</p>
          <strong>{animeDiedit ? 'Edit' : 'Tambah'}</strong>
        </div>
      </section>

      <FormAnime
        key={animeDiedit ? animeDiedit.id : 'baru'}
        dataAwal={animeDiedit}
        onSimpan={simpan}
        onBatal={() => setAnimeDiedit(null)}
      />

      <TabelAnime daftar={daftarAnime} onEdit={mulaiEdit} onHapus={hapus} />
    </main>
  )
}

export default Admin
