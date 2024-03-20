import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, name: 'first_name' })
  firstName: string;

  @Column({ type: 'varchar', length: 255, name: 'last_name' })
  lastName: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @Column({ type: 'json', nullable: true })
  extension: any;

  @CreateDateColumn({ name: 'createdAt', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', type: 'timestamp' })
  updatedAt: Date;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'varchar', length: 128, name: 'created_by', default: 'test' })
  createdBy: string;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'varchar', length: 128, name: 'updated_by', default: 'test' })
  updatedBy: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
