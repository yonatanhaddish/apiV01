import { Test, TestingModule } from '@nestjs/testing';
import { ReptilesController } from './reptiles.controller';

describe('ReptilesController', () => {
  let controller: ReptilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReptilesController],
    }).compile();

    controller = module.get<ReptilesController>(ReptilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
