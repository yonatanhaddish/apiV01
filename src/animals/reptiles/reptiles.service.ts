import { Injectable } from '@nestjs/common';

@Injectable()
export class ReptilesService {
  getReptiles(): string {
    return 'Reptiles API coming soon...';
  }
}
