import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  id: number;

  @IsString()
  firstName: string;
  @IsString()
  lastName: string;

  @IsString()
  telephone: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsBoolean()
  isActive: boolean;
}
export default CreateCustomerDto;
