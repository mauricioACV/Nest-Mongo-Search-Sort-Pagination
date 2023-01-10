import { seeder } from 'nestjs-seeder';
import { ProductSeeder } from './product.seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.entity';

seeder({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/nest_search?directConnection=true',
    ),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
}).run([ProductSeeder]);
