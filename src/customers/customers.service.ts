import CreateCustomerDto from './dto/CreateCustomerDto';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { Body, Get, Injectable, Post } from '@nestjs/common';
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
  getCustomerById(id: number): Promise<Customer | undefined> {
    return this.customersRepository.findOne({ where: { id } });
  }

  @Post()
  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const newCustomer = new Customer();

    newCustomer.firstName = createCustomerDto.firstName;
    newCustomer.lastName = createCustomerDto.lastName;
    newCustomer.isActive = createCustomerDto.isActive;
    newCustomer.address = createCustomerDto.address;
    newCustomer.email = createCustomerDto.email;
    newCustomer.telephone = createCustomerDto.telephone;

    return this.customersRepository.save(createCustomerDto);
  }
  @Get('/search')
  filterCustomersByName(firstName: string): Promise<Customer[]> {
    return this.customersRepository.find({ where: { firstName } });
  }

  @Post()
  updateCustomer(@Body() customer: CreateCustomerDto): Promise<Customer> {
    return this.customersRepository.save(customer);
  }
  test(str: string) {
    return str;
  }
}
