import { Module } from '@nestjs/common';
import { ProvinceModule } from './province/province.module';
import { CityModule } from './city/city.module';
import { CostModule } from './cost/cost.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProvinceModule,
    CityModule,
    CostModule,
  ],
  controllers: [],
})
export class AppModule {}
