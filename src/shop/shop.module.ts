import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { OrderDetail, OrderDetailSchema } from './schemas/order_detail.schema';
import { Status, StatusSchema } from './schemas/status.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Order.name, schema: OrderSchema},
      {name: OrderDetail.name, schema: OrderDetailSchema},
      {name: Status.name, schema: StatusSchema}
    ]),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
