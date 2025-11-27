import { Test, TestingModule } from '@nestjs/testing';
import { BibliotecaUniversitariaController } from './biblioteca-universitaria.controller';

describe('BibliotecaUniversitariaController', () => {
  let controller: BibliotecaUniversitariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibliotecaUniversitariaController],
    }).compile();

    controller = module.get<BibliotecaUniversitariaController>(BibliotecaUniversitariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
