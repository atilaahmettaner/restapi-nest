import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private customersRepository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new Product();
    newProduct.name = createProductDto.name;
    newProduct.description = createProductDto.description;
    newProduct.price = createProductDto.price;
    newProduct.stock = createProductDto.stock;
    newProduct.image = createProductDto.image;
    return this.customersRepository.save(createProductDto);
  }

  findAll(): Promise<Product[]> {
    return this.customersRepository.find({});
  }

  findOne(id: number) {
    return this.customersRepository.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.customersRepository.save(updateProductDto);
  }

  remove(id: number) {
    return this.customersRepository.delete(id);
  }
}
