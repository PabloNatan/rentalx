import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const DataSourceConfig = new DataSource({
  type: 'postgres',
  host: 'database_ignite',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: ['src/modules/*/entities/*{.ts,.js}'],
  synchronize: true,
  logging: false,
  migrations: ['src/database/migrations/*.{ts, js}'],
  migrationsTableName: 'custom_migration_table',
  cli: {
    migrationDir: 'src/database/migrations',
    entitiesDir: 'src/database/entities',
  },
} as DataSourceOptions);

DataSourceConfig.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default DataSourceConfig;
