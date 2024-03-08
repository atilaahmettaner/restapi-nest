import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}
  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const newOrder = new Order();
    newOrder.orderDate = createOrderDto.orderDate;
    newOrder.customerId = createOrderDto.customerId;
    newOrder.shippedDate = createOrderDto.shippedDate;
    newOrder.shipperId = createOrderDto.shipperId;
    newOrder.freight = createOrderDto.freight;
    newOrder.shipName = createOrderDto.shipName;
    newOrder.shipAddress = createOrderDto.shipAddress;
    newOrder.shipCity = createOrderDto.shipCity;
    newOrder.orderDetails = createOrderDto.orderDetails;
    return this.orderRepository.save(createOrderDto);
  }

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({});
  }

  findOne(id: number) {
    return this.orderRepository.findOne({ where: { id } });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.save(updateOrderDto);
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
