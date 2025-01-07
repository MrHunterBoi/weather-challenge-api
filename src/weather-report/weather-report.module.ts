import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiService } from 'src/api/api.service';
import { WeatherReportController } from './weather-report.controller';
import { WeatherReportService } from './weather-report.service';

@Module({
  controllers: [WeatherReportController],
  providers: [WeatherReportService, ApiService],
  imports: [ConfigModule],
})
export class WeatherReportModule {}
