import { Test, TestingModule } from '@nestjs/testing';
import { BibliotecaUniversitariaService } from './biblioteca-universitaria.service';

describe('BibliotecaUniversitariaService', () => {
  let service: BibliotecaUniversitariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibliotecaUniversitariaService],
    }).compile();

    service = module.get<BibliotecaUniversitariaService>(BibliotecaUniversitariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
