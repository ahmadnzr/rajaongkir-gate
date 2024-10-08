import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProvinceService {
  private readonly baseURL = 'https://api.rajaongkir.com/starter';
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<any> {
    try {
      const response: AxiosResponse = await firstValueFrom(
        this.httpService.get(`${this.baseURL}/province`, {
          headers: {
            key: process.env.API_KEY,
          },
        }),
      );
      return response.data;
    } catch (err) {
      throw new HttpException(
        'Failed to fetch provinces from RajaOngkir API',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
