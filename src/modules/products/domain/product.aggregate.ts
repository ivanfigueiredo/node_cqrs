import AggregateRoot from '../../@shared/domain/entity/aggregate-root.interface';
import { BaseEntity } from '../../@shared/domain/entity';
import { ID } from '../../@shared/domain/value-object';

interface ProductProps {
  id?: ID;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  productVariationsId?: string[];
}

export class Product extends BaseEntity implements AggregateRoot {
  private constructor(private readonly props: ProductProps) {
    super();
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get purchasePrice(): number {
    return this.props.purchasePrice;
  }

  get stock(): number {
    return this.props.stock;
  }

  get productVariationsId(): string[] {
    return this.props.productVariationsId;
  }

  addProductVariationId(ids: string[]): void {
    this.props.productVariationsId = ids;
  }

  static create(props: ProductProps): Product {
    const product = new Product(props);
    return product;
  }
}
