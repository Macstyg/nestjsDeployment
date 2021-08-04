import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from 'config/config.module';
import { typeOrmConfig } from 'config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
