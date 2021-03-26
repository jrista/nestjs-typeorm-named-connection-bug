import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEntity } from './entities/my-entity.model';
import { MyEntityService } from './entities/my-entity.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      name: 'test',
      url: process.env.MONGODB_URI_DEV,
      useUnifiedTopology: true,
      logging: true,
      logger: 'advanced-console',
      entities: [MyEntity],
    }),
    TypeOrmModule.forFeature([MyEntity], 'test'),
  ],
  providers: [MyEntityService],
})
export class AppModule {}
