import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { AnimeService } from './anime.service.js';
import { CreateAnimeDto } from './dto/create-anime.dto.js';
import { UpdateAnimeDto } from './dto/update-anime.dto.js';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  // GET: Menampilkan semua anime
  @Get()
  findAll() {
    return this.animeService.findAll();
  }

  // GET: Menampilkan anime berdasarkan ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.animeService.findOne(id);
  }

  // POST: Menambahkan anime
  @Post()
  create(@Body() createAnimeDto: CreateAnimeDto) {
    return this.animeService.create(createAnimeDto);
  }

  // PATCH: Mengubah data anime
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnimeDto: UpdateAnimeDto,
  ) {
    return this.animeService.update(id, updateAnimeDto);
  }

  // DELETE: Menghapus anime
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.animeService.remove(id);
  }
}