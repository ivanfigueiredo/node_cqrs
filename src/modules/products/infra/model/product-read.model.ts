import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = ProductReadModel & Document;

class ProductVariationsEntity {
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
}

@Schema({
  autoCreate: true,
  autoIndex: true,
  timestamps: true,
  collection: 'products',
})
export class ProductReadModel {
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

  @Prop({ required: true, type: Date })
  createdAt!: Date;

  @Prop({ required: true, type: Date })
  updatedAt!: Date;

  @Prop({ type: [{ type: Object, required: true }] })
  productVariations: ProductVariationsEntity[];
}

const ProductSchema = SchemaFactory.createForClass(ProductReadModel);

export { ProductSchema };
