import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { NotFoundError } from '../../common/errors/not-found.error';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  public createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  public findAll(
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 30 }) limit: number,
    @Args('offset', { type: () => Int, nullable: true, defaultValue: 0 }) offset: number,
  ) {
    return this.usersService.findAll(limit, offset);
  }

  @Query(() => User, { name: 'user' })
  public findOne(@Args('path', { type: () => String }) path: string) {
    const user = this.usersService.findOneByPath(path);

    if (!user) {
      throw new NotFoundError(`User with path "${path}" not found`);
    }

    return user;
  }

  @Mutation(() => User)
  public updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => User)
  public removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }

  @Query(() => Int, { name: 'countUsers' })
  public count() {
    return this.usersService.count();
  }
}
