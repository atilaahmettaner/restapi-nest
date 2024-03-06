import CreateCustomerDto from './dto/CreateCustomerDto';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { Get, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CustomersController } from './customers.controller';
@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}
  CreateCustomer(customer: CreateCustomerDto): Promise<Customer> {
    return this.customersRepository.save(customer);
  }
  @Get()
  getAllCustomers(): Promise<Customer[]> {
    return this.customersRepository.find({});
  }
  @Post()
  async createCustomer(customer: CreateCustomerDto): Promise<Customer> {
    const newCustomer = new Customer();

    newCustomer.firstName = customer.firstName;
    newCustomer.lastName = customer.lastName;
    newCustomer.isActive = customer.isActive;
    newCustomer.address = customer.address;
    newCustomer.email = customer.email;
    newCustomer.telephone = customer.telephone;

    return this.customersRepository.save(customer);
  }
}
