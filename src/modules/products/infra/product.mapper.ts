import { ID } from '../../@shared/domain/value-object';
import { Product } from '../domain/product.aggregate';
import { ProductWriteModel } from './model/product-write.model';

export class ProductMapper {
  toDomain(target: ProductWriteModel): Product {
    return Product.create({
      id: new ID(target.id),
      description: target.description,
      name: target.name,
      purchasePrice: target.purchasePrice,
      stock: target.stock,
      productVariationsId: target.productVariationsId,
    });
  }

  toPersister(target: Product) {
    return {
      id: target.id.value,
      description: target.description,
      name: target.name,
      purchasePrice: target.purchasePrice,
      stock: target.stock,
      productVariationsId: target.productVariationsId,
      createdAt: target.createdAt,
      updatedAt: target.updatedAt,
    };
  }
}
