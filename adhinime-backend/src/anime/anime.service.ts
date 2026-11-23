import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { Anime } from './entities/anime.entity.js';
import { CreateAnimeDto } from './dto/create-anime.dto.js';
import { UpdateAnimeDto } from './dto/update-anime.dto.js';

@Injectable()
export class AnimeService {
  private anime: Anime[] = [];
  private nextId = 1;

  // CREATE
  create(createAnimeDto: CreateAnimeDto) {
    const duplikat = this.anime.find(
      (a) => a.judul.toLowerCase() === createAnimeDto.judul.toLowerCase(),
    );

    if (duplikat) {
      throw new ConflictException('Anime sudah terdaftar');
    }

    const dataBaru: Anime = {
      id: this.nextId++,
      judul: createAnimeDto.judul,
      gambar: createAnimeDto.gambar ?? '',
      genre: createAnimeDto.genre ?? [],
      rating: createAnimeDto.rating ?? null,
      episode: createAnimeDto.episode ?? null,
      status: createAnimeDto.status,
      popularitas: createAnimeDto.popularitas ?? 0,
      tren: createAnimeDto.tren ?? 0,
      sinopsis: createAnimeDto.sinopsis ?? '',
    };

    this.anime.push(dataBaru);
    return dataBaru;
  }

  // READ ALL
  findAll() {
    return this.anime;
  }

  // READ ONE
  findOne(id: number) {
    const data = this.anime.find((a) => a.id === id);

    if (!data) {
      throw new NotFoundException('Anime tidak ditemukan');
    }

    return data;
  }

  // UPDATE
  update(id: number, updateAnimeDto: UpdateAnimeDto) {
    const data = this.findOne(id);

    Object.assign(data, updateAnimeDto);

    return data;
  }

  // DELETE
  remove(id: number) {
    const data = this.findOne(id);

    this.anime = this.anime.filter((a) => a.id !== id);

    return {
      message: 'Anime berhasil dihapus',
      data,
    };
  }
}