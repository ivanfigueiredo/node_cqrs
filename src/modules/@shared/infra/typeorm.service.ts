import { ProductWriteModel } from '../../products/infra/model/product-write.model';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '../env';
import { ProductsVariationWriteModel } from 'src/modules/product-variation/infra/model/product-variations-write.model';

@Injectable()
export class TypeOrmConfigService {
  static createPostgresConnection(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      logging: false,
      synchronize: true,
      migrations: [],
      entities: [ProductWriteModel, ProductsVariationWriteModel],
      database: POSTGRES_DATABASE,
      host: POSTGRES_HOST,
      username: POSTGRES_USER,
      port: POSTGRES_PORT,
      password: POSTGRES_PASSWORD,
    };
  }
}

// export class Persister extends DataSource {
//   constructor() {
//     super({
//       type: 'postgres',
//       logging: true,
//       replication: {
//         master: {
//           database: DATABASE_MASTER_NAME,
//           host: DATABASE_MASTER_HOST,
//           password: DATABASE_MASTER_PASSWORD,
//           port: Number(DATABASE_MASTER_PORT),
//           username: DATABASE_MASTER_USER,
//         },
//         slaves: [
//           {
//             database: DATABASE_SLAVE_NAME,
//             host: DATABASE_SLAVE_HOST,
//             password: DATABASE_SLAVE_PASSWORD,
//             port: Number(DATABASE_SLAVE_PORT),
//             username: DATABASE_SLAVE_USER,
//           },
//         ],
//       },
//       synchronize: true,
//       entities: [ProductModel],
//     });
//   }
// }
