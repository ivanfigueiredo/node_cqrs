import { Inject } from '@nestjs/common';
import { ProductVariations } from 'src/modules/product-variation/domain';
import UpdatedProductDatabaseReadEvent from './events/updated-reading-banks.event';
import { Product } from './product.aggregate';
import UpdatedProductDatabaseReadSubscriptions from './subscriptions/updated-reading-banks.subcriptions';

interface CreateProductDto {
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

export class ProductService {
  constructor(
    @Inject(UpdatedProductDatabaseReadSubscriptions)
    private readonly updatedProductDatabaseReadSubscriptions: UpdatedProductDatabaseReadSubscriptions,
  ) {}
  createProduct(dto: CreateProductDto): Product {
    return Product.create(dto);
  }

  addProductVariationMany(
    product: Product,
    productVariations: ProductVariations[],
  ): void {
    product.addProductVariationId(
      productVariations.map((item) => item.id.value),
    );
  }

  createdProduct(
    product: Product,
    productVariations: ProductVariations[],
  ): void {
    const event = new UpdatedProductDatabaseReadEvent(
      productVariations,
      product,
    );

    product.register(
      UpdatedProductDatabaseReadEvent.name,
      this.updatedProductDatabaseReadSubscriptions,
    );

    product.notify(event);
  }
}
