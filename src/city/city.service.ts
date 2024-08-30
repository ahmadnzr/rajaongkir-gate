import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CityService {
  private readonly baseURL = 'https://api.rajaongkir.com/starter';
  constructor(private readonly httpService: HttpService) {}

  async findAll({ provinceId }: { provinceId: string }): Promise<any> {
    try {
      console.log({
        key: process.env.API_KEY,
      });
      const response: AxiosResponse = await firstValueFrom(
        this.httpService.get(`${this.baseURL}/city?province=${provinceId}`, {
          headers: {
            key: process.env.API_KEY,
          },
        }),
      );
      return response.data;
    } catch (err) {
      throw new HttpException(
        'Failed to fetch cities from RajaOngkir API',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
