import { Module } from '@nestjs/common';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers/customer.entity';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'customer',
      entities: [Customer],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Customer]),
  ],
  exports: [CustomersService],
})
export class AppModule {}
