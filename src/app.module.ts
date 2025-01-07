import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { ApiService } from './api/api.service';
import { WeatherReportModule } from './weather-report/weather-report.module';
import { WeatherReportService } from './weather-report/weather-report.service';
import { AppLoggerMiddleware } from 'src/middleware/logger';

@Module({
  imports: [WeatherReportModule, ApiModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [WeatherReportService, ApiService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
