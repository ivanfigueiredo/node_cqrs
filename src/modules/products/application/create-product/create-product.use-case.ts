import { ProductService } from './../../domain/producr.service';
import { CreateProductDto } from './create-product.dto';
import IUseCase from '../../../@shared/application/Iuse-case.interface';
import { Inject } from '@nestjs/common';
import { ProductPostgresGateway } from '../../infra/product.postgres.gateway';
import { ProductRepository } from '../../domain/product.repository';
import { ProductVariationService } from '../../../product-variation/domain/product-variation.service';

export class CreateProductUseCase implements IUseCase {
  constructor(
    @Inject(ProductService)
    private readonly productService: ProductService,

    @Inject(ProductVariationService)
    private readonly productVariationService: ProductVariationService,

    @Inject(ProductPostgresGateway)
    private readonly productPersister: ProductRepository,
  ) {}

  async execute(dto: CreateProductDto): Promise<void> {
    const product = this.productService.createProduct(dto);
    const productVariations = dto.productVariations.map((item) =>
      this.productVariationService.createProductVariation(
        Object.assign(item, { productId: product.id.value }),
      ),
    );

    this.productVariationService.createdProductVariation(productVariations);

    this.productVariationService.updatedReadDatabase(
      product,
      productVariations,
    );

    this.productService.addProductVariationMany(product, productVariations);
    this.productService.createdProduct(product, productVariations);

    await this.productPersister.save(product);
  }
}
