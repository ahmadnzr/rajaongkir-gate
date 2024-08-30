import { Module } from '@nestjs/common';
import { ProvinceModule } from './province/province.module';

@Module({
  imports: [ProvinceModule],
  controllers: [],
})
export class AppModule {}
