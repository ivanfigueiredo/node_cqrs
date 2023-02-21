export interface CreateProductDto {
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  productVariations: {
    color: string;
    barcode: string;
    internCode: string;
    reference: string;
  }[];
}
