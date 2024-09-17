import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user/user.interface';
import { createDtoUser } from './dto/createUserDto.dto';

@Controller('users')
export class UsersController {
    constructor (private readonly userServices: UsersService){}
    @Get()
    findAllusers(): User [] {
        return this.userServices.getUsers();
    }

    @Post()

    addUser(@Body() newUser: createDtoUser) {
        return this.userServices.createUser(newUser);
    }

}
