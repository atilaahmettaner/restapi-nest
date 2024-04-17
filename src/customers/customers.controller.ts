import { Customer } from './customer.entity';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/CreateCustomerDto';
import { Roles } from 'nest-keycloak-connect';
//localhost:3000/customers/
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
  filterCustomersByName(
    @Query('firstName') firstName: string,
  ): Promise<Customer[]> {
    return this.customersService.filterCustomersByName(firstName);
  }
  @Get('/search2')
  filterCustomersByName2(
    @Query('firstName') firstName: string,
  ): Promise<Customer[]> {
    return this.customersService.filterCustomersByName(firstName);
  }
  @Post()
  updateCustomer(@Body() customer: CreateCustomerDto): Promise<Customer> {
    return this.customersService.updateCustomer(customer);
  }

  @Get(':id')
  getCustomerById(@Param('id') id: number): Promise<Customer | undefined> {
    return this.customersService.getCustomerById(id);
  }
  @Get('/test')
  testRoute(): string {
    return 'Bu bir test mesajıdır.';
  }
}
