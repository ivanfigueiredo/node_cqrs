import { Inject } from '@nestjs/common';
import IUseCase from '../../@shared/application/Iuse-case.interface';
import { IApplicationService } from './application.interface';
import { CreateProductDto } from './create-product/create-product.dto';
import { CreateProductUseCase } from './create-product/create-product.use-case';

export class ApplicationService implements IApplicationService {
  constructor(
    @Inject(CreateProductUseCase)
    private readonly createProductUseCase: IUseCase,
  ) {}

  async createProduct(req: CreateProductDto): Promise<void> {
    await this.createProductUseCase.execute(req);
  }
}
