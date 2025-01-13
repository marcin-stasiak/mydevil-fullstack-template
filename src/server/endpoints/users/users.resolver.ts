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
  public findAll() {
    return this.usersService.findAll();
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
