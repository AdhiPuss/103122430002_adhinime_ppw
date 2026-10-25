# AdhiNime Frontend

Aplikasi katalog anime (React + Vite). Entitas utama: **Anime**.
Dikembangkan bertahap sampai Pekan 14, disambungkan ke backend/API di Pekan 11.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Dua mode
- **Pengguna**: Home, Anime, Trending, Latest, Genre, Profil (tampilan AdhiNime lama)
- **Admin** (tombol "Masuk Admin" di header): tambah, edit, hapus data anime

## Struktur
```
src/
├── App.jsx                 # state daftarAnime + fungsi tambah/ubah/hapus
├── data/animeAwal.js
├── hooks/usePageCss.js     # memuat CSS lama per halaman
└── components/
    Header, Footer, KartuAnime, Home, Anime, Trending, Latest, Genre, Profil,
    Admin, FormAnime, TabelAnime
public/css/                 # CSS dari versi HTML lama
```
