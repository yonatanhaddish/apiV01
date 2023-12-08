import { Controller, Get } from '@nestjs/common';
import { BirdsService } from './birds.service';

@Controller('animals/birds')
export class BirdsController {
  constructor(private readonly birdService: BirdsService) {}

  @Get()
  getBirds(): string {
    return this.birdService.getBirds();
  }
}
