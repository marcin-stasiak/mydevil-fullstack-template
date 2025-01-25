import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

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
    @Args('limit', { type: () => Number, defaultValue: 30 }) limit: number,
    @Args('offset', { type: () => Number, defaultValue: 0 }) offset: number,
  ) {
    return this.usersService.findAll(limit, offset);
  }

  @Query(() => User, { name: 'user' })
  public findOne(@Args('slug', { type: () => String }) slug: string) {
    return this.usersService.findOneBySlug(slug);
  }

  @Mutation(() => User)
  public updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => User)
  public removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }

  @Query(() => Number, { name: 'countUsers' })
  public count() {
    return this.usersService.count();
  }
}
