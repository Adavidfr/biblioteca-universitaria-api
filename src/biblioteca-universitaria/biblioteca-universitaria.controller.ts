import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BibliotecaUniversitariaService } from './biblioteca-universitaria.service';
import { CreateLibroDto } from './dto/create-biblioteca-universitaria.dto';
import { UpdateLibroDto } from './dto/update-biblioteca-universitaria.dto';

@Controller('libros')
export class BibliotecaUniversitariaController {
  constructor(private readonly bibliotecaUniversitariaService: BibliotecaUniversitariaService) {}

  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.bibliotecaUniversitariaService.create(createLibroDto);
  }

  @Get()
  findAll() {
    return this.bibliotecaUniversitariaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bibliotecaUniversitariaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLibroDto: UpdateLibroDto) {
    return this.bibliotecaUniversitariaService.update(id, updateLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bibliotecaUniversitariaService.remove(id);
  }
}
