import { IsInt, Max, Min } from 'class-validator';

export class GetUsersDto {
  @IsInt({ message: 'skip must be an integer' })
  @Min(0, { message: 'skip must be greater than or equal to 0' })
  skip: number;

  @IsInt({ message: 'take must be an integer' })
  @Max(100, { message: 'take must be less than or equal to 100' })
  take: number;
}
