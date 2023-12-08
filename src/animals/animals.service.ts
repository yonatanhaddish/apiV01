import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimalsService {
  getAnimal(): string {
    console.log('Test');
    return 'Animal API Coming Soon...';
  }
}
