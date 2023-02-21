import IDomainEvent from '../../../@shared/domain/events/idomain-events';
import { ProductVariations } from '../product-variations.aggregate';

export default class AddedProductVariationsEvent implements IDomainEvent {
  dataTimeOccurred: Date;
  eventData: ProductVariations[];

  constructor(eventData: ProductVariations[]) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
