import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiService {
  constructor(private configService: ConfigService) {}

  baseWeatherUrl = this.configService.get<string>(
    'EXPO_PUBLIC_OPEN_WEATHER_URL',
  );
  apiKey = this.configService.get<string>('EXPO_PUBLIC_OPEN_WEATHER_API_KEY');

  async fetchWeatherApi<T>(query: string): Promise<T> {
    const res = await fetch(
      `${this.baseWeatherUrl}/${query}&appid=${this.apiKey}`,
    );

    return res.json();
  }
}
