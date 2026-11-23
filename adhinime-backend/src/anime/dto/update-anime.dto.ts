import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeDto } from './create-anime.dto.js';

export class UpdateAnimeDto extends PartialType(CreateAnimeDto) {}