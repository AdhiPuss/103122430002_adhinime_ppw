import { Test, TestingModule } from '@nestjs/testing';
import { AnimeController } from './anime.controller.js';
import { AnimeService } from './anime.service.js';

describe('AnimeController', () => {
  let controller: AnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeController],
      providers: [AnimeService],
    }).compile();

    controller = module.get<AnimeController>(AnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
