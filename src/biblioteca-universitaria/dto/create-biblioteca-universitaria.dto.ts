import { IsString } from 'class-validator';

export class CreateLibroDto {

    @IsString()
    isbn: string;
  
    @IsString()
    titulo: string;
  
    @IsString()
    autor: string;
    
    @IsString()
    editorial: string;
  
    @IsString()
    anio_publicacion: number;
  
    @IsString()
    categoria: string;
  
    @IsString()
    num_paginas: number;
  
    @IsString()
    ubicacion: string;
  
    @IsString()
    estado: string;
  
    @IsString()
    copias_disponibles: number;





}
