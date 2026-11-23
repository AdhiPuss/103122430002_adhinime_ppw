const API_URL = 'http://localhost:3000/anime';

// GET: Mengambil semua anime
export const ambilSemuaAnime = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Gagal mengambil data anime');
  }

  return response.json();
};

// POST: Menambahkan anime
export const tambahAnimeApi = async (data) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal menambahkan anime');
  }

  return response.json();
};

// PATCH: Mengubah anime
export const ubahAnimeApi = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal mengubah anime');
  }

  return response.json();
};

// DELETE: Menghapus anime
export const hapusAnimeApi = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal menghapus anime');
  }

  return response.json();
};