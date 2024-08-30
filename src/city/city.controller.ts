import { Controller, Get, Query } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  findAll(@Query('province') province: string) {
    return this.cityService.findAll({ provinceId: province });
  }
}
