interface CreateProduct {
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

export interface IApplicationService {
  createProduct: (req: CreateProduct) => Promise<void>;
}
