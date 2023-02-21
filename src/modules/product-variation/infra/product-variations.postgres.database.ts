import { Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductVariations } from 'src/modules/product-variation/domain';
import { Repository } from 'typeorm';
import { ProductVariationsRepository } from '../domain/iproduct-variation.repo';
import { ProductsVariationWriteModel } from './model/product-variations-write.model';
import { ProductVariationsMapper } from './product-variations.mapper';

export class ProductVariationsPostgresDatabase
  implements ProductVariationsRepository
{
  constructor(
    @InjectRepository(ProductsVariationWriteModel)
    private readonly persister: Repository<ProductsVariationWriteModel>,

    @Inject(ProductVariationsMapper)
    private readonly productVariationsMapper: ProductVariationsMapper,
  ) {}

  async saveMany(productVariationDomain: ProductVariations[]): Promise<void> {
    const variationPersister = productVariationDomain.map((item) =>
      this.productVariationsMapper.toPersister(item),
    );

    await this.persister.save(variationPersister);
  }
}
