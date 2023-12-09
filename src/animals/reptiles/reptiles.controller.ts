import { Controller, Get } from '@nestjs/common';
import { ReptilesService } from './reptiles.service';

@Controller('animals/reptiles')
export class ReptilesController {
  constructor(private readonly reptilesService: ReptilesService) {}

  @Get()
  getReptiles(): string {
    return this.reptilesService.getReptiles();
  }
}
