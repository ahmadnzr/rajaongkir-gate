import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CostService {
  private readonly baseURL = 'https://api.rajaongkir.com/starter';
  constructor(private readonly httpService: HttpService) {}

  async findAll(params: {
    origin: string;
    destination: string;
    weight: string;
    courier: string;
  }): Promise<any> {
    const paramsEncoded = new URLSearchParams();
    for (const key in params) {
      paramsEncoded.append(key, params[key]);
    }

    console.log(paramsEncoded);

    try {
      const response: AxiosResponse = await firstValueFrom(
        this.httpService.post(`${this.baseURL}/cost`, paramsEncoded, {
          headers: {
            key: process.env.API_KEY,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );
      return response.data;
    } catch (err) {
      console.log('err', err);
      throw new HttpException(
        'Failed to fetch cities from RajaOngkir API',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
