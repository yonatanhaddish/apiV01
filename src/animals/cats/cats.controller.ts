import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('animals/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): string {
    return this.catsService.getCats();
  }
}
