import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductVariations } from 'src/modules/product-variation/domain';
import { Product } from '../../products/domain/product.aggregate';
import { ProductVariationsRepository } from '../domain/iproduct-variation.repo';
import {
  ProductsVariationReadModel,
  ProductVariationsDocument,
} from './model/product-variations-read.model';

export class ProductVariationsMongoDatabase
  implements ProductVariationsRepository
{
  constructor(
    @InjectModel(ProductsVariationReadModel.name)
    private readonly model: Model<ProductVariationsDocument>,
  ) {}

  async saveMany(
    productVariation: ProductVariations[],
    product?: Product,
  ): Promise<void> {
    const productVariationsPersister = await Promise.all(
      productVariation.map((item) =>
        Object.assign(
          {
            id: item.id.value,
            barcode: item.barcode,
            color: item.color,
            internCode: item.internCode,
            reference: item.reference,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          },
          {
            product: {
              id: product.id.value,
              name: product.name,
              purchasePrice: product.purchasePrice,
              description: product.description,
              stock: product.stock,
            },
          },
        ),
      ),
    );

    await this.model.insertMany(productVariationsPersister);
  }
}
