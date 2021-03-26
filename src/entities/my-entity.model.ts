import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class MyEntity {
  @ObjectIdColumn() _id: string;
  @Column() name: string;
}
