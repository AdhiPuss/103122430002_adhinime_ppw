# AdhiNime

**AdhiNime** merupakan website katalog anime yang dikembangkan menggunakan React dan NestJS. Website ini menyediakan informasi anime, termasuk judul, genre, rating, episode, status, popularitas, dan sinopsis.

## Teknologi
- React + Vite (Frontend)
- NestJS (Backend)
- TypeScript
- REST API
- Class Validator

## Struktur Proyek
- `frontend/` – Tampilan dan antarmuka website.
- `backend/` – Backend menggunakan NestJS dengan struktur MVC.
- `backend/src/anime/` – Resource Anime yang menangani operasi CRUD.

## Fitur
- Menampilkan daftar anime.
- Melihat detail informasi anime.
- Menambahkan data anime.
- Mengubah data anime.
- Menghapus data anime.
- Validasi input dan penanganan error.

## Endpoint API

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | /anime | Menampilkan semua anime |
| GET | /anime/:id | Detail anime |
| POST | /anime | Menambahkan anime |
| PATCH | /anime/:id | Mengubah anime |
| DELETE | /anime/:id | Menghapus anime |

## Cara Menjalankan

**Backend:**
```bash
cd backend
npm install
npm run start:dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Backend berjalan pada port 3000 dan frontend menggunakan port 5173.

## Penyimpanan Data
Data anime disimpan sementara menggunakan array di dalam memori backend.

## Dokumentasi
Screenshot tahapan pengerjaan tersedia di `backend/docs/screenshots/`.
