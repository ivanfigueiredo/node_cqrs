import { EnvironmentVariableTypes } from './environment.types';
import { config } from 'dotenv';

/* istanbul ignore next */

config();

export const {
  PORT,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  MONGO_DATABASE,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_HOST,
  isDev,
  isLocal,
  isProd,
} = process.env as unknown as EnvironmentVariableTypes;
