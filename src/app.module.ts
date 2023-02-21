import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/products/product.module';
import { TypeOrmConfigService } from './modules/@shared/infra/typeorm.service';
import {
  MongoURI,
  MongoDbConfig,
} from './modules/@shared/infra/mongoDB.config';

@Module({
  imports: [
    MongooseModule.forRoot(MongoURI, MongoDbConfig),
    TypeOrmModule.forRootAsync({
      useFactory: () => TypeOrmConfigService.createPostgresConnection(),
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
