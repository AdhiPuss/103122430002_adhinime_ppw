import { useState, useEffect, useRef } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Anime from './components/Anime';
import Trending from './components/Trending';
import Latest from './components/Latest';
import Genre from './components/Genre';
import Profil from './components/Profil';
import Admin from './components/Admin';

import { animeAwal } from './data/animeAwal';

import {
  ambilSemuaAnime,
  tambahAnimeApi,
  ubahAnimeApi,
  hapusAnimeApi,
} from './services/animeApi';

function App() {
  const sudahMemuat = useRef(false);
  const [daftarAnime, setDaftarAnime] = useState([]);
  const [halaman, setHalaman] = useState('home');
  const [role, setRole] = useState('user');
  const [fokusCari, setFokusCari] = useState(false);

  // Mengambil data dari backend saat aplikasi dibuka
  useEffect(() => {
    if (sudahMemuat.current) return;
    sudahMemuat.current = true;
    const muatAnime = async () => {
      try {
        let data = await ambilSemuaAnime();

        // Jika backend masih kosong, masukkan data awal AdhiNime
        if (data.length === 0) {
          data = [];

          for (const anime of animeAwal) {
            const { id, ...dataAnime } = anime;
            const hasil = await tambahAnimeApi(dataAnime);
            data.push(hasil);
          }
        }

        setDaftarAnime(data);
      } catch (error) {
        console.error('Gagal memuat anime:', error);
        alert('Backend tidak dapat dihubungi. Pastikan NestJS berjalan.');
      }
    };

    muatAnime();
  }, []);

  const pindah = (tujuan, cari = false) => {
    setHalaman(tujuan);
    setFokusCari(cari);
    window.scrollTo(0, 0);
  };

  const ubahRole = (roleBaru) => {
    setRole(roleBaru);
    setHalaman(roleBaru === 'admin' ? 'admin' : 'home');
    window.scrollTo(0, 0);
  };

  // CREATE
  const tambahAnime = async (animeBaru) => {
    try {
      const hasil = await tambahAnimeApi(animeBaru);
      setDaftarAnime((sebelumnya) => [hasil, ...sebelumnya]);
    } catch (error) {
      alert(error.message);
    }
  };

  // UPDATE
  const ubahAnime = async (id, dataBaru) => {
    try {
      const hasil = await ubahAnimeApi(id, dataBaru);

      setDaftarAnime((sebelumnya) =>
        sebelumnya.map((anime) =>
          anime.id === id ? hasil : anime,
        ),
      );
    } catch (error) {
      alert(error.message);
    }
  };

  // DELETE
  const hapusAnime = async (id) => {
    try {
      await hapusAnimeApi(id);

      setDaftarAnime((sebelumnya) =>
        sebelumnya.filter((anime) => anime.id !== id),
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header
        halaman={halaman}
        role={role}
        onPindah={pindah}
        onRole={ubahRole}
      />

      {halaman === 'home' && (
        <Home daftarAnime={daftarAnime} onPindah={pindah} />
      )}

      {halaman === 'anime' && (
        <Anime daftarAnime={daftarAnime} fokusCari={fokusCari} />
      )}

      {halaman === 'trending' && (
        <Trending daftarAnime={daftarAnime} onPindah={pindah} />
      )}

      {halaman === 'latest' && (
        <Latest daftarAnime={daftarAnime} onPindah={pindah} />
      )}

      {halaman === 'genre' && <Genre daftarAnime={daftarAnime} />}

      {halaman === 'profil' && <Profil role={role} />}

      {halaman === 'admin' && role === 'admin' && (
        <Admin
          daftarAnime={daftarAnime}
          onTambah={tambahAnime}
          onUbah={ubahAnime}
          onHapus={hapusAnime}
        />
      )}

      <Footer />
    </>
  );
}

export default App;