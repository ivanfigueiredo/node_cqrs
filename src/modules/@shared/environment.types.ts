export interface EnvironmentVariableTypes {
  PORT: number;
  POSTGRES_HOST: string;
  POSTGRES_DATABASE: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_PORT: number;
  MONGO_DATABASE: string;
  MONGO_USER: string;
  MONGO_PASSWORD: string;
  MONGO_PORT: number;
  MONGO_HOST: string;
  isProd?: boolean;
  isDev?: boolean;
  isLocal?: boolean;
}
