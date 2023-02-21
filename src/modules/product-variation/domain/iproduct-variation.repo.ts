import { Product } from '../../products/domain/product.aggregate';
import { ProductVariations } from '.';

export interface ProductVariationsRepository {
  saveMany: (
    productVariation: ProductVariations[],
    product?: Product,
  ) => Promise<void>;
}
