import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../orders/entities/order.entity';
@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  @Column()
  telephone: string;
  @Column()
  email: string;

  @Column()
  address: string;

  @Column({ default: true })
  isActive: boolean;
}
