import { ProductVariations } from '../domain';
import { ProductsVariationWriteModel } from './model/product-variations-write.model';

export class ProductVariationsMapper {
  toDomain(target: ProductsVariationWriteModel): ProductVariations {
    return ProductVariations.create({
      id: target.id,
      barcode: target.barcode,
      productId: target.productId,
      color: target.color,
      internCode: target.internCode,
      reference: target.reference,
    });
  }

  toPersister(target: ProductVariations) {
    return {
      id: target.id.value ?? '',
      barcode: target.barcode,
      color: target.color,
      internCode: target.internCode,
      reference: target.reference,
      productId: target.productId,
      createdAt: target.createdAt,
      updatedAt: target.updatedAt,
    };
  }
}
