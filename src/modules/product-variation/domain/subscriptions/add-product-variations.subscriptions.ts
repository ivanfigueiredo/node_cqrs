import { Inject, Logger } from '@nestjs/common';
import IDomainEvent from 'src/modules/@shared/domain/events/idomain-events';
import IHandle from '../../../@shared/domain/events/ihandle';
import { ProductVariationsPostgresDatabase } from '../../infra/product-variations.postgres.database';
import AddedProductVariationsEvent from '../events/add-product-variations.event';
import { ProductVariationsRepository } from '../iproduct-variation.repo';

export default class AddedProductVariationsSubscriptions
  implements IHandle<IDomainEvent>
{
  private readonly logger = new Logger(
    AddedProductVariationsSubscriptions.name,
  );

  constructor(
    @Inject(ProductVariationsPostgresDatabase)
    private readonly productRepository: ProductVariationsRepository,
  ) {}

  dispatch(event: AddedProductVariationsEvent): void {
    this.productRepository.saveMany(event.eventData);
    this.logger.verbose('EVENT DOMAIN - Created Product Variatio');
  }
}
