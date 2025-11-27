import { IsOptional, IsString } from 'class-validator';

export class UpdateLibroDto {

  @IsString()
  @IsOptional()
  isbn?: string;

  @IsString()
  @IsOptional()
  titulo?: string;

  @IsString()
  @IsOptional()
  autor?: string;
  
  @IsString()
  @IsOptional()                  
  editorial?: string;

  @IsString()
  @IsOptional()
  anio_publicacion?: string;

  @IsString()
  @IsOptional()
  categoria?: string;

  @IsString()
  @IsOptional()
  num_paginas?: number;

  @IsString()
  @IsOptional()
  ubicacion?: string;

  @IsString()
  @IsOptional()
  estado?: string;

  @IsString()
  @IsOptional()
  copias_disponibles?: number;

}
