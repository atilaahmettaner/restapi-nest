import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Column } from 'typeorm';
import { OrderDetail } from '../../order-detail/entities/order-detail.entity';
import { Customer } from '../../customers/customer.entity';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail[];

  @Column()
  customerId: number;
  @Column()
  orderDate: Date;
  @Column()
  shippedDate: Date;
  @Column()
  shipperId: number;
  @Column()
  freight: number;
  @Column()
  shipName: string;
  @Column()
  shipAddress: string;
  @Column()
  shipCity: string;
}
