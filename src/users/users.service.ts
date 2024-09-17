import { Injectable } from '@nestjs/common';
import { User } from './user/user.interface';
import { createDtoUser } from './dto/createUserDto.dto';

@Injectable()
export class UsersService {

    users = [
        {
            id: 1,
            nom: "nameUser 1",
            prenom: "lastNameUser 1",
            email: "user@gmail.com"
        },
        {
            id: 2,
            nom: "nameUser 2",
            prenom: "lastNameUser 2",
            email: "user@gmail.com"
        },
        {
            id: 3,
            nom: "nameUser 3",
            prenom: "lastNameUser 3",
            email: "user@gmail.com"
        },
        {
            id: 4,
            nom: "nameUser 4",
            prenom: "lastNameUser 4",
            email: "user@gmail.com"
        },
        {
            id: 5,
            nom: "nameUser 5",
            prenom: "lastNameUser 5",
            email: "user@gmail.com"
        },
    ]

    getUsers(): User [] {
         return this.users;
    }

    createUser(user: createDtoUser){
        return [...this.users, user as createDtoUser]
    }
}
