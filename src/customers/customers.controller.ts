import { Customer } from './customer.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/CreateCustomerDto';
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get()
  getAllCustomers(): Promise<Array<Customer>> {
    return this.customersService.getAllCustomers();
  }

  @Post()
  createCustomer(@Body() customer: CreateCustomerDto): Promise<Customer> {
    return this.customersService.createCustomer(customer);
  }
}
