import { Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductVariations } from '../../product-variation/domain/product-variations.aggregate';
import { Product } from '../domain/product.aggregate';
import { ProductRepository } from '../domain/product.repository';
import { ProductDocument, ProductReadModel } from './model/product-read.model';
import { ProductMapper } from './product.mapper';

export class ProductMongoGateway implements ProductRepository {
  constructor(
    @InjectModel(ProductReadModel.name)
    private readonly model: Model<ProductDocument>,

    @Inject(ProductMapper)
    private readonly productMapper: ProductMapper,
  ) {}

  async save(
    product: Product,
    productVariations?: ProductVariations[],
  ): Promise<void> {
    const productPersister = Object.assign(
      this.productMapper.toPersister(product),
      {
        productVariations: productVariations.map((item) => ({
          id: item.id.value,
          color: item.color,
          barcode: item.barcode,
          internCode: item.internCode,
          reference: item.reference,
        })),
      },
    );
    await new this.model({ ...productPersister }).save();
  }
}
