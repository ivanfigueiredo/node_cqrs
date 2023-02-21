import { MongooseModuleOptions } from '@nestjs/mongoose';

import {
  MONGO_PORT,
  isProd,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_DATABASE,
} from '../env';

export const MongoDbConfig: MongooseModuleOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ignoreUndefined: true,
};

const preffix = isProd ? 'mongodb+srv' : 'mongodb';
const suffix = isProd ? '?retryWrites=true&w=majority' : '?authSource=admin';
const PORT = isProd ? '' : `:${MONGO_PORT}`;

export const MongoURI = `${preffix}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}${PORT}/${MONGO_DATABASE}${suffix}`;
