import { DataSource, type DataSourceOptions } from "typeorm";
import config from "./config";

const DB_NAME = "markreminders";

const dataSourceConfig: DataSourceOptions = {
  name: "markreminders-connection",
  type: "capacitor",
  driver: config.connection,
  database: DB_NAME,
  mode: "no-encryption",
  entities: ["entities/*{.ts,.js}"],
  subscribers: [],
  logging: [/*'query',*/ 'error','schema'],
  synchronize: false,     // !!!You will lose all data in database if set to `true`
  migrationsRun: false
};

const dataSource = new DataSource(dataSourceConfig);

export default {
  dataSource,
  dbName: DB_NAME,
};

