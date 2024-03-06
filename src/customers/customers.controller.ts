import { Customer } from './customer.entity';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
  @Get('/search')
  filterCustomersByName(@Query('firstName') name: string): Promise<Customer[]> {
    return this.customersService.filterCustomersByName(name);
  }
  //can you write a function that will update a customer
  @Post()
  updateCustomer(@Body() customer: CreateCustomerDto): Promise<Customer> {
    return this.customersService.updateCustomer(customer);
  }

  @Get(':id')
  getCustomerById(id: number): Promise<Customer | undefined> {
    return this.customersService.getCustomerById(id);
  }
}
