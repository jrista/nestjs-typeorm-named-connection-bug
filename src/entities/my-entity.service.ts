import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MyEntity } from './my-entity.model';

@Injectable()
export class MyEntityService {
  constructor(@InjectRepository(MyEntity) private readonly repository: Repository<MyEntity>) {}
}
