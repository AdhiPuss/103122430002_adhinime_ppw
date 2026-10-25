// Entitas utama: Anime
// { id, judul, gambar, genre[], rating, episode, status, popularitas, tren, sinopsis }

export const INFO_GENRE = {
  Action: { ikon: '⚔️', ket: 'Pertarungan seru' },
  Adventure: { ikon: '🧭', ket: 'Petualangan epik' },
  Comedy: { ikon: '😂', ket: 'Penuh tawa' },
  Drama: { ikon: '🎭', ket: 'Cerita menyentuh' },
  Fantasy: { ikon: '✨', ket: 'Dunia ajaib' },
  Romance: { ikon: '💗', ket: 'Kisah cinta' },
  Mystery: { ikon: '🔎', ket: 'Penuh teka-teki' },
  Supernatural: { ikon: '👻', ket: 'Kekuatan gaib' },
  Historical: { ikon: '🏯', ket: 'Kisah masa lalu' },
  Sports: { ikon: '🏐', ket: 'Semangat bertanding' },
  Seinen: { ikon: '🎬', ket: 'Cerita lebih dewasa' },
}

export const DAFTAR_GENRE = Object.keys(INFO_GENRE)

export const STATUS_ANIME = {
  baru: { label: 'NEW', kelas: 'new' },
  ongoing: { label: 'ONGOING', kelas: 'ongoing' },
  tamat: { label: 'TAMAT', kelas: 'completed' },
  segera: { label: 'SOON', kelas: 'upcoming' },
}

// ===== helper tampilan =====
export const poster = (a) => a.gambar || '/asset/img/placeholder.svg'
export const teksRating = (a) => (a.rating === null ? 'N/A' : a.rating)
export const teksEpisode = (a) => (a.episode === null ? 'Not yet aired' : 'EP ' + a.episode)
export const teksJumlahEp = (a) => (a.episode === null ? '-' : a.episode + ' EP')

export const animeAwal = [
  { id: 1, judul: 'Kusuriya no Hitorigoto Season 3', gambar: '/asset/img/kusuriya.jpg', genre: ['Drama', 'Mystery', 'Historical'], rating: 8.6, episode: 12, status: 'baru', popularitas: 100, tren: 0,
    sinopsis: 'Setelah pemberontakan Klan Shi, keadaan akhirnya tenang, dan Maomao kembali ke kehidupan lamanya sebagai apoteker di distrik hiburan. Suatu hari, dipicu oleh sarapan yang disajikan di Rumah Verdigris, Maomao kembali terseret ke dalam misteri baru di lingkungan istana.' },
  { id: 2, judul: 'One Piece', gambar: '/asset/img/onepiece.jpg', genre: ['Action', 'Adventure'], rating: 8.7, episode: 1180, status: 'ongoing', popularitas: 90, tren: 0, sinopsis: '' },
  { id: 3, judul: 'Oshi No Ko Season 3', gambar: '/asset/img/oshi.jpg', genre: ['Drama', 'Supernatural'], rating: 8.6, episode: 11, status: 'tamat', popularitas: 95, tren: 0, sinopsis: '' },
  { id: 4, judul: 'Sousou no Frieren Season 2', gambar: '/asset/img/sousou.jpg', genre: ['Adventure', 'Fantasy'], rating: 8.8, episode: 10, status: 'tamat', popularitas: 80, tren: 1, sinopsis: '' },
  { id: 5, judul: 'Super no Ura de Yani Suu Futari', gambar: '/asset/img/super.jpg', genre: ['Romance', 'Seinen'], rating: 8.2, episode: 12, status: 'tamat', popularitas: 40, tren: 0, sinopsis: '' },
  { id: 6, judul: 'Tantei wa Mou, Shindeiru Season 2', gambar: '/asset/img/tantei.jpg', genre: ['Comedy', 'Mystery'], rating: null, episode: null, status: 'segera', popularitas: 30, tren: 0, sinopsis: '' },
  { id: 7, judul: 'Solo Leveling', gambar: '/asset/img/solo-leveling.jpg', genre: ['Action', 'Fantasy'], rating: 8.8, episode: 25, status: 'ongoing', popularitas: 50, tren: 0, sinopsis: '' },
  { id: 8, judul: 'Jujutsu Kaisen', gambar: '/asset/img/jujutsu-kaisen.jpg', genre: ['Action', 'Supernatural'], rating: 8.6, episode: 47, status: 'ongoing', popularitas: 85, tren: 2, sinopsis: '' },
  { id: 9, judul: 'Demon Slayer', gambar: '/asset/img/demon-slayer.jpg', genre: ['Action', 'Fantasy'], rating: 8.7, episode: 63, status: 'ongoing', popularitas: 75, tren: -1, sinopsis: '' },
  { id: 10, judul: 'Spy x Family', gambar: '/asset/img/spyxfamily.jpg', genre: ['Comedy', 'Action'], rating: 8.5, episode: 37, status: 'ongoing', popularitas: 60, tren: 2, sinopsis: '' },
  { id: 11, judul: 'Haikyuu!!', gambar: '/asset/img/haikyu.jpg', genre: ['Sports', 'Comedy', 'Drama'], rating: 8.8, episode: 85, status: 'tamat', popularitas: 55, tren: -2, sinopsis: '' },
  { id: 12, judul: 'Bleach', gambar: '/asset/img/bleach.jpg', genre: ['Action', 'Adventure', 'Fantasy'], rating: 8.2, episode: 366, status: 'ongoing', popularitas: 65, tren: 3, sinopsis: '' },
  { id: 13, judul: 'Attack on Titan', gambar: '/asset/img/aot.jpg', genre: ['Action', 'Drama'], rating: 9.1, episode: 87, status: 'tamat', popularitas: 70, tren: 0, sinopsis: '' },
]
