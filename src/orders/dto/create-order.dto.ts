import { Customer } from '../../customers/customer.entity';
import { OrderDetail } from '../../order-detail/entities/order-detail.entity';

export class CreateOrderDto {
  id: number;
  customer: Customer;
  orderDetails: OrderDetail[];
  customerId: number;
  orderDate: Date;
  shippedDate: Date;
  shipperId: number;
  freight: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
}
