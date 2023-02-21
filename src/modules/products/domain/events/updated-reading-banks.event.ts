import { ProductVariations } from '../../../product-variation/domain';
import IDomainEvent from '../../../@shared/domain/events/idomain-events';
import { Product } from '../product.aggregate';

export default class UpdatedProductDatabaseReadEvent implements IDomainEvent {
  dataTimeOccurred: Date;
  eventData: ProductVariations[];
  product: Product;

  constructor(eventData: ProductVariations[], product: Product) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
    this.product = product;
  }
}
