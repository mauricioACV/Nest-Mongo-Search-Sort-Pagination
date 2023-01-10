import { DataFactory, Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.entity';
import { Model } from 'mongoose';

export class ProductSeeder implements Seeder {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}
  seed(): Promise<any> {
    return this.productModel.deleteMany({}) as any;
  }
  drop(): Promise<any> {
    const products = DataFactory.createForClass(Product).generate(50);
    return this.productModel.insertMany(products);
  }
}
