import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './biblioteca-universitaria.entity';
import { CreateLibroDto } from './dto/create-biblioteca-universitaria.dto';
import { UpdateLibroDto } from './dto/update-biblioteca-universitaria.dto';

@Injectable()
export class BibliotecaUniversitariaService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
  ) {}

  create(createLibroDto: CreateLibroDto) {
    const libro = this.libroRepository.create(createLibroDto);
    return this.libroRepository.save(libro);

  }

  findAll() {
    return this.libroRepository.find();
  }

  findOne(id: string) {
    return this.libroRepository.findOne({ where: { id } });
  }

  async update(id: string, updateLibroDto: UpdateLibroDto) {
    const libro = await this.libroRepository.findOne({ where: { id } });
    if (!libro) return null;
    Object.assign(libro, updateLibroDto);
    return this.libroRepository.save(libro);
  }

  async remove(id: string) {
    const libro = await this.libroRepository.findOne({ where: { id } });
    if (!libro) return null;
    return this.libroRepository.remove(libro);
  }

  calcularEstadisticasPrestamos(prestamosPorDia: number[]): { totalPrestamos: number; promedio: number; mensaje: string } {
    const totalPrestamos = prestamosPorDia.reduce((acc, prestamos) => acc + prestamos, 0);
    const promedio = totalPrestamos / prestamosPorDia.length;

    let mensaje: string;
    if (totalPrestamos < 10) {
      mensaje = 'Poca actividad de préstamo';
    } else if (totalPrestamos <= 30) {
      mensaje = 'Actividad normal';
    } else {
      mensaje = 'Alta demanda de libros';
    }

    return { totalPrestamos, promedio, mensaje };
  }



}
