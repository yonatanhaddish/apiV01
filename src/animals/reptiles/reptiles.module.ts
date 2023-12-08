import { Module } from '@nestjs/common';
import { ReptilesController } from './reptiles.controller';
import { ReptilesService } from './reptiles.service';

@Module({
  controllers: [ReptilesController],
  providers: [ReptilesService]
})
export class ReptilesModule {}
