import { Module } from '@nestjs/common';
import { BibliotecaUniversitariaController } from './biblioteca-universitaria.controller';
import { BibliotecaUniversitariaService } from './biblioteca-universitaria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './biblioteca-universitaria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  controllers: [BibliotecaUniversitariaController],
  providers: [BibliotecaUniversitariaService]
})
export class BibliotecaUniversitariaModule {}
