import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { GetUsersDto } from './dto/get-users.dto';

@Injectable()
export class UsersService {
  /**
   * Inject the repository via decorator, it looks like the spring boot @Autowired
   * @param userRepository
   */
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll(getUsersDto: GetUsersDto) {
    return this.userRepository.findAndCount({
      skip: getUsersDto.skip,
      take: getUsersDto.take,
    });
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
