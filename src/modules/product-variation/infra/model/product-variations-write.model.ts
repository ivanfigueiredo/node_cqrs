import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'products_variations' })
export class ProductsVariationWriteModel extends BaseEntity {
  @PrimaryColumn({ unique: true, type: 'varchar' })
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  color!: string;

  @Column({ type: 'varchar', length: 255 })
  reference!: string;

  @Column({ type: 'varchar', length: 255 })
  barcode!: string;

  @Column({ type: 'varchar', length: 255, name: 'intern_code' })
  internCode!: string;

  @Column({ type: 'date', name: 'created_at' })
  createdAt!: Date;

  @Column({ type: 'date', name: 'updated_at' })
  updatedAt!: Date;

  @Column({ type: 'varchar', length: 120, name: 'product_id' })
  productId!: string;
}
