import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsVariationWriteModel } from './infra/model/product-variations-write.model';
import {
  ProductsVariationReadModel,
  ProductVariationsSchema,
} from './infra/model/product-variations-read.model';
import { ProductVariationsMongoDatabase } from './infra/product-variations.mongo.database';
import { ProductVariationsPostgresDatabase } from './infra/product-variations.postgres.database';
import { ProductsVariationController } from './presentation/products-variation.controller';
import { ProductVariationService } from './domain/product-variation.service';
import { MongooseModule } from '@nestjs/mongoose';
import AddedProductVariationsSubscriptions from './domain/subscriptions/add-product-variations.subscriptions';

Module({
  imports: [
    TypeOrmModule.forFeature([ProductsVariationWriteModel]),
    MongooseModule.forFeature([
      {
        name: ProductsVariationReadModel.name,
        schema: ProductVariationsSchema,
      },
    ]),
  ],
  providers: [
    AddedProductVariationsSubscriptions,
    ProductVariationsPostgresDatabase,
    ProductVariationsMongoDatabase,
    ProductVariationService,
  ],
  controllers: [ProductsVariationController],
});
export class ProductsVariationModule {}
