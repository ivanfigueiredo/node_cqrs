import { Product } from 'src/modules/products/domain/product.aggregate';
import { ProductVariations } from './product-variations.aggregate';
import UpdatedProductDatabaseReadEvent from './events/updated-reading-banks.event';
import { Inject } from '@nestjs/common';
import AddedProductVariationsSubscriptions from './subscriptions/add-product-variations.subscriptions';
import AddedProductVariationsEvent from './events/add-product-variations.event';
import UpdatedProductVariationDatabaseReadSubscriptions from './subscriptions/updated-reading-banks.subcriptions';

interface ProductVariationDto {
  color: string;
  barcode: string;
  internCode: string;
  reference: string;
  productId: string;
}

export class ProductVariationService {
  constructor(
    @Inject(UpdatedProductVariationDatabaseReadSubscriptions)
    private readonly updatedProductVariationDatabaseReadSubscriptions: UpdatedProductVariationDatabaseReadSubscriptions,

    @Inject(AddedProductVariationsSubscriptions)
    private readonly addedProductVariationsSubscriptions: AddedProductVariationsSubscriptions,
  ) {}

  createProductVariation(dto: ProductVariationDto): ProductVariations {
    return ProductVariations.create(dto);
  }

  createdProductVariation(productVariation: ProductVariations[]): void {
    const event = new AddedProductVariationsEvent(productVariation);
    productVariation[0].register(
      AddedProductVariationsEvent.name,
      this.addedProductVariationsSubscriptions,
    );
    productVariation[0].notify(event);
  }

  updatedReadDatabase(
    product: Product,
    productVariation: ProductVariations[],
  ): void {
    const event = new UpdatedProductDatabaseReadEvent(
      productVariation,
      product,
    );

    product.register(
      UpdatedProductDatabaseReadEvent.name,
      this.updatedProductVariationDatabaseReadSubscriptions,
    );

    product.notify(event);
  }
}
