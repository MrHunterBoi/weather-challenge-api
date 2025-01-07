import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { CityCoordsDTO } from 'src/weather-report/dto/cityCoordsDTO';

@Injectable()
export class WeatherReportService {
  constructor(private readonly apiService: ApiService) {}

  async getWeatherReport(city: string, units: string = 'metric') {
    const cityData = await this.getCityCoords(city);

    return this.apiService.fetchWeatherApi(
      `data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&units=${units}`,
    );
  }

  private getCityCoords = async (city: string): Promise<CityCoordsDTO> => {
    const data = (
      await this.apiService.fetchWeatherApi<CityCoordsDTO[]>(
        `geo/1.0/direct?q=${city}&limit=5`,
      )
    )[0];

    if (!data) {
      throw new NotFoundException('City not found');
    }

    return data;
  };
}
