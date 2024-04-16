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
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
@Module({
  controllers: [CustomersController],
  providers: [
    CustomersService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // This adds a global level resource guard, which is permissive.
    // Only controllers annotated with @Resource and
    // methods with @Scopes
    // are handled by this guard.
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    // New in 1.1.0
    // This adds a global level role guard, which is permissive.
    // Used by `@Roles` decorator with the
    // optional `@AllowAnyRole` decorator for allowing any
    // specified role passed.
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080/auth',
      realm: 'Customers',
      clientId: 'nest-app1',
      secret: 'DXSOfl45zhdIhW4BSL3WouOpY2SCyB0D',
    }),
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
