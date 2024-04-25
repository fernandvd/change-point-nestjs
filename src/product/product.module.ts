import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/category.schema';
import { OptionSchema, Option } from './schemas/option.schema';
import { Product, ProductSchema } from './schemas/product.schema';
import { UserVisitedProduct, UserVisitedProductSchema } from './schemas/user_visited_product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Category.name, schema: CategorySchema},
      {name: Option.name, schema: OptionSchema},
      {name: Product.name, schema: ProductSchema},
      {name: UserVisitedProduct.name, schema: UserVisitedProductSchema},
    ])
  ]
})
export class ProductModule {}
