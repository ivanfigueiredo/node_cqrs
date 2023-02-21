import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsVariationWriteModel } from './model/product-variations-write.model';

@Injectable()
export class ProductsVariationsQuery {
  constructor(
    @InjectRepository(ProductsVariationWriteModel)
    private readonly productsVariationsRepo: Repository<ProductsVariationWriteModel>,
  ) {}

  async getProductVariationsAll(productId: string): Promise<any[]> {
    const variations = await this.productsVariationsRepo.find({
      where: { productId },
    });

    return variations;
  }

  async findProductVariationById(id: string): Promise<any> {
    const productVariations = await this.productsVariationsRepo.findOne({
      where: { id },
    });
    return productVariations;
  }

  async findProductVariationByProductId(productId: string): Promise<any> {
    const productVariations = await this.productsVariationsRepo.findOne({
      where: { productId },
    });
    return productVariations;
  }
}
