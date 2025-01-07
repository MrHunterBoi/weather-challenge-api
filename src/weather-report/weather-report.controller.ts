import { Controller, Get, Query } from '@nestjs/common';
import { WeatherReportService } from './weather-report.service';

@Controller('weather-report')
export class WeatherReportController {
  constructor(private readonly weatherReportService: WeatherReportService) {}

  @Get()
  getWeatherReport(@Query('city') city: string, @Query('units') units: string) {
    return this.weatherReportService.getWeatherReport(city, units);
  }
}
