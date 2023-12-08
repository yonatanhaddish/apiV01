import { Controller, Get } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalService: AnimalsService) {}

  @Get()
  getAnimal(): string {
    return this.animalService.getAnimal();
  }
}
