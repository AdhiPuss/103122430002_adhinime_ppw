import {
    IsString,
    IsArray,
    IsNumber,
    IsOptional,
    IsIn,
    MinLength,
  } from 'class-validator';
  
  export class CreateAnimeDto {
    @IsString()
    @MinLength(2)
    judul: string;
  
    @IsOptional()
    @IsString()
    gambar?: string;
  
    @IsOptional()
    @IsArray()
    genre?: string[];
  
    @IsOptional()
    @IsNumber()
    rating?: number | null;
  
    @IsOptional()
    @IsNumber()
    episode?: number | null;
  
    @IsIn(['baru', 'ongoing', 'tamat', 'segera'])
    status: string;
  
    @IsOptional()
    @IsNumber()
    popularitas?: number;
  
    @IsOptional()
    @IsNumber()
    tren?: number;
  
    @IsOptional()
    @IsString()
    sinopsis?: string;
  }