import { Body, Controller, Post } from '@nestjs/common';
import { CostService } from './cost.service';

@Controller('cost')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Post()
  findAll(
    @Body()
    params: {
      origin: string;
      destination: string;
      weight: string;
      courier: string;
    },
  ) {
    return this.costService.findAll(params);
  }
}
