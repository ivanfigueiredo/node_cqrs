import { Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../domain/product.aggregate';
import { ProductRepository } from '../domain/product.repository';
import { ProductWriteModel } from './model/product-write.model';
import { ProductMapper } from './product.mapper';

export class ProductPostgresGateway implements ProductRepository {
  constructor(
    @InjectRepository(ProductWriteModel)
    private readonly persister: Repository<ProductWriteModel>,

    @Inject(ProductMapper)
    private readonly productMapper: ProductMapper,
  ) {}

  async save(product: Product): Promise<void> {
    const productPersister = this.productMapper.toPersister(product);
    await this.persister
      .createQueryBuilder()
      .insert()
      .values({ ...productPersister })
      .execute();
  }
}
