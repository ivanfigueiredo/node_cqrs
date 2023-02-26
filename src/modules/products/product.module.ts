import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationService } from './application/application.service';
import { CreateProductUseCase } from './application/create-product/create-product.use-case';
import { ProductService } from './domain/producr.service';
import { ProductWriteModel } from './infra/model/product-write.model';
import {
  ProductReadModel,
  ProductSchema,
} from './infra/model/product-read.model';
import { ProductsVariationWriteModel } from '../product-variation/infra/model/product-variations-write.model';
import {
  ProductsVariationReadModel,
  ProductVariationsSchema,
} from '../product-variation/infra/model/product-variations-read.model';
import { ProductPostgresGateway } from './infra/product.postgres.gateway';
import { ProductMapper } from './infra/product.mapper';
import { ProductController } from './presentation/product';
import { ProductMongoGateway } from './infra/product.mongodb.gateway';
import AddedProductVariationsSubscriptions from '../product-variation/domain/subscriptions/add-product-variations.subscriptions';
import { ProductVariationsPostgresDatabase } from '../product-variation/infra/product-variations.postgres.database';
import { ProductVariationsMapper } from '../product-variation/infra/product-variations.mapper';
import UpdatedProductVariationDatabaseReadSubscriptions from '../product-variation/domain/subscriptions/updated-reading-banks.subcriptions';
import UpdatedProductDatabaseReadSubscriptions from './domain/subscriptions/updated-reading-banks.subcriptions';
import { ProductVariationService } from '../product-variation/domain/product-variation.service';
import { ProductVariationsMongoDatabase } from '../product-variation/infra/product-variations.mongo.database';
import EventDispatcher from '../@shared/domain/events/event-dispatcher';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductWriteModel, ProductsVariationWriteModel]),
    MongooseModule.forFeature([
      {
        name: ProductReadModel.name,
        schema: ProductSchema,
      },
      {
        name: ProductsVariationReadModel.name,
        schema: ProductVariationsSchema,
      },
    ]),
  ],
  providers: [
    AddedProductVariationsSubscriptions,
    UpdatedProductDatabaseReadSubscriptions,
    {
      provide: 'UpdatedProductDatabaseReadSubscriptions',
      useClass: UpdatedProductDatabaseReadSubscriptions,
    },
    UpdatedProductVariationDatabaseReadSubscriptions,
    ProductVariationsPostgresDatabase,
    ProductVariationsMongoDatabase,
    ProductVariationsMapper,
    ProductPostgresGateway,
    ProductMongoGateway,
    CreateProductUseCase,
    ProductService,
    ProductVariationService,
    ProductMapper,
    ApplicationService,
    {
      provide: 'EventDispatcher',
      useClass: EventDispatcher,
    },
  ],
  controllers: [ProductController],
})
export class ProductModule {}
