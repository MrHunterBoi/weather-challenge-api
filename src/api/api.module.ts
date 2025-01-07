import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiService } from './api.service';

@Module({
  providers: [ApiService],
  imports: [ConfigModule],
})
export class ApiModule {}
