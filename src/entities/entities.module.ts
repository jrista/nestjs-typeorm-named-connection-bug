import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEntity } from './my-entity.model';
import { MyEntityService } from './my-entity.service';

@Module({
  imports: [TypeOrmModule.forFeature([MyEntity], 'mongo')],
  exports: [TypeOrmModule],
  providers: [MyEntityService],
})
export class EntitiesModule {}
