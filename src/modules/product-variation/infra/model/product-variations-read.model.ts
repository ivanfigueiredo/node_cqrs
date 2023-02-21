import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductVariationsDocument = ProductsVariationReadModel & Document;

class ProductEntity {
  @Prop({
    required: true,
    unique: true,
    index: true,
    type: String,
    immutable: true,
  })
  id!: string;

  @Prop({ required: true, type: String })
  name!: string;

  @Prop({ required: true, type: String })
  description!: string;

  @Prop({ required: true, type: Number })
  purchasePrice!: number;

  @Prop({ required: true, type: Number })
  stock!: number;
}

@Schema({
  autoCreate: true,
  autoIndex: true,
  timestamps: true,
  collection: 'product_variations',
})
export class ProductsVariationReadModel {
  @Prop({
    required: true,
    unique: true,
    index: true,
    type: String,
    immutable: true,
  })
  id!: string;

  @Prop({ required: true, type: String })
  color!: string;

  @Prop({ required: true, type: String })
  reference!: string;

  @Prop({ required: true, type: String })
  barcode!: string;

  @Prop({ required: true, type: String })
  internCode!: string;

  @Prop({ required: true, type: Date })
  createdAt!: Date;

  @Prop({ required: true, type: Date })
  updatedAt!: Date;

  @Prop({ required: true, type: Object })
  product!: ProductEntity;
}

const ProductVariationsSchema = SchemaFactory.createForClass(
  ProductsVariationReadModel,
);

export { ProductVariationsSchema };
