import { Injectable } from '@nestjs/common';

@Injectable()
export class ProvinceService {
  findAll() {
    return `This action returns all province`;
  }
}
