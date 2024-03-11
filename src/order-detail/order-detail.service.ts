import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderDetailService {
  //repository injection
  constructor(
    @InjectRepository(OrderDetail)
    private orderDetailRepository: Repository<OrderDetail>,
  ) {}
  create(createOrderDetailDto: CreateOrderDetailDto): Promise<OrderDetail> {
    const newOrderDetail = new OrderDetail();
    newOrderDetail.orderId = createOrderDetailDto.orderId;
    newOrderDetail.productId = createOrderDetailDto.productId;
    newOrderDetail.unitPrice = createOrderDetailDto.unitPrice;
    newOrderDetail.quantity = createOrderDetailDto.quantity;
    return this.orderDetailRepository.save(createOrderDetailDto);
  }

  findAll() {
    return this.orderDetailRepository.find({});
  }

  findOne(id: number) {
    return this.orderDetailRepository.findOne({ where: { id } });
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailRepository.save(updateOrderDetailDto);
  }

  remove(id: number) {
    return this.orderDetailRepository.delete(id);
  }
}
