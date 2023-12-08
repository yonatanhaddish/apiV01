import { Injectable } from '@nestjs/common';

@Injectable()
export class BirdsService {
  getBirds(): string {
    return 'Birds API coming soon...';
  }
}
