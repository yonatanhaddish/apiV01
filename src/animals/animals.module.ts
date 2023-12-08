import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { BirdsModule } from './birds/birds.module';
import { CatsModule } from './cats/cats.module';
import { ReptilesModule } from './reptiles/reptiles.module';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService],
  imports: [BirdsModule, CatsModule, ReptilesModule]
})
export class AnimalsModule {}
