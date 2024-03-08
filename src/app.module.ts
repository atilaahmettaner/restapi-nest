import { Module } from '@nestjs/common';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers/customer.entity';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { ProductsModule } from './products/products.module';
import { OrderDetail } from './order-detail/entities/order-detail.entity';
import { Order } from './orders/entities/order.entity';
import { Product } from './products/entities/product.entity';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'customer',
      entities: [Customer, Order, OrderDetail, Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Customer, Order, OrderDetail, Product]),
    OrdersModule,
    OrderDetailModule,
    ProductsModule,
  ],
  exports: [CustomersService, OrdersModule, OrderDetailModule, ProductsModule],
})
export class AppModule {}
