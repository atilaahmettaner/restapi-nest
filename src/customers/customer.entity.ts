import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  @Column()
  telephone: string;
  @Column()
  email: string;

  @Column()
  address: string;

  @Column({ default: true })
  isActive: boolean;
}
