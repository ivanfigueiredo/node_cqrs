import { Inject, Logger } from '@nestjs/common';
import IDomainEvent from '../../../@shared/domain/events/idomain-events';
import IHandle from '../../../@shared/domain/events/ihandle';
import UpdatedProductVariationsDatabaseReadEvent from '../events/updated-reading-banks.event';
import {
  ProductsVariationReadModel,
  ProductVariationsDocument,
} from '../../../product-variation/infra/model/product-variations-read.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductVariationsMongoDatabase } from '../../infra/product-variations.mongo.database';
import { ProductVariationsRepository } from '../iproduct-variation.repo';

export default class UpdatedProductVariationDatabaseReadSubscriptions
  implements IHandle<IDomainEvent>
{
  private readonly logger = new Logger(
    UpdatedProductVariationDatabaseReadSubscriptions.name,
  );

  constructor(
    @InjectModel(ProductsVariationReadModel.name)
    private readonly model: Model<ProductVariationsDocument>,

    @Inject(ProductVariationsMongoDatabase)
    private readonly productVariationsRepository: ProductVariationsRepository,
  ) {}

  dispatch(event: UpdatedProductVariationsDatabaseReadEvent): void {
    const { product, eventData } = event;
    // const variation = new this.model({
    //   id: eventData.id.value,
    //   barcode: eventData.barcode,
    //   color: eventData.color,
    //   internCode: eventData.internCode,
    //   reference: eventData.reference,
    //   createdAt: new Date(eventData.createdAt),
    //   updatedAt: new Date(eventData.updatedAt),
    //   product: {
    //     id: product.id.value,
    //     name: product.name,
    //     description: product.description,
    //     purchasePrice: product.purchasePrice,
    //     stock: product.stock,
    //   },
    // });
    // variation.save();
    this.productVariationsRepository.saveMany(eventData, product);
    this.logger.verbose('EVENT DOMAIN - Updated Database read');
  }
}
