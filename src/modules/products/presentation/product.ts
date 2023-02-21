import { Controller, Inject, Post, Body } from '@nestjs/common';
import { ApplicationService } from './../application/application.service';
import { IApplicationService } from '../application/application.interface';

@Controller('products')
export class ProductController {
  constructor(
    @Inject(ApplicationService)
    private readonly applicationService: IApplicationService,
  ) {}

  @Post()
  async createProduct(@Body() product: any) {
    await this.applicationService.createProduct(product);
  }
}
