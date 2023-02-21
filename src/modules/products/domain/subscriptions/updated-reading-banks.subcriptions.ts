import { ProductMongoGateway } from './../../infra/product.mongodb.gateway';
import { Inject, Logger } from '@nestjs/common';
import IDomainEvent from '../../../@shared/domain/events/idomain-events';
import IHandle from '../../../@shared/domain/events/ihandle';
import UpdatedProductDatabaseReadEvent from '../events/updated-reading-banks.event';
import { ProductRepository } from '../product.repository';

export default class UpdatedProductDatabaseReadSubscriptions
  implements IHandle<IDomainEvent>
{
  private readonly logger = new Logger(
    UpdatedProductDatabaseReadSubscriptions.name,
  );

  constructor(
    @Inject(ProductMongoGateway)
    private readonly productRepository: ProductRepository,
  ) {}

  dispatch(event: UpdatedProductDatabaseReadEvent): void {
    const { product, eventData } = event;
    this.productRepository.save(product, eventData);
    this.logger.verbose('EVENT DOMAIN - Update Database read');
  }
}
