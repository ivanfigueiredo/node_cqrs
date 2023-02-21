import { ProductVariations } from '../../product-variation/domain';
import { Product } from './product.aggregate';

export interface ProductRepository {
  save: (
    product: Product,
    productVariations?: ProductVariations[],
  ) => Promise<void>;
}
