import { BaseEntity } from '../../@shared/domain/entity';
import AggregateRoot from '../../@shared/domain/entity/aggregate-root.interface';
interface ProductsVariationsProps {
  color: string;
  barcode: string;
  internCode: string;
  reference: string;
  id?: string;
  productId: string;
}
export class ProductVariations extends BaseEntity implements AggregateRoot {
  private constructor(private readonly props: ProductsVariationsProps) {
    super();
  }

  get productId(): string {
    return this.props.productId;
  }

  get color(): string {
    return this.props.color;
  }

  get barcode(): string {
    return this.props.barcode;
  }

  get internCode(): string {
    return this.props.internCode;
  }

  get reference(): string {
    return this.props.reference;
  }

  public static create(props: ProductsVariationsProps) {
    const productVariation = new ProductVariations(props);
    return productVariation;
  }
}
