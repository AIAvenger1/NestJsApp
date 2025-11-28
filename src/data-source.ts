import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Coffee } from './coffees/entities/coffee.entity';
import { Flavor } from './coffees/entities/flavor.entity';
import { Event } from './events/entities/event.entity';

// DataSource used by the TypeORM CLI for migrations.
export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor, Event],
  migrations: ['dist/migrations/*.js'],
});
