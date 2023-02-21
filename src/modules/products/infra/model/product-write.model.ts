import { BaseEntity, Column, Entity, PrimaryColumn, Index } from 'typeorm';

@Entity({ name: 'products' })
@Index(['name', 'description', 'purchasePrice', 'stock'])
@Index(['id'], { unique: true })
export class ProductWriteModel extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description!: string;

  @Column({ type: 'float', name: 'purchase_price' })
  purchasePrice!: number;

  @Column({ type: 'int' })
  stock!: number;

  @Column('text', { name: 'product_variation_id', nullable: false })
  productVariationsId: string[];

  @Column({ type: 'date', name: 'created_at' })
  createdAt!: Date;

  @Column({ type: 'date', name: 'updated_at' })
  updatedAt!: Date;
}
