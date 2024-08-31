import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
     todos = [
        {
            id:1,
            done: true,
            title: 'todo app',
            description: 'creer un app'
        },
        {
            id:2,
            done: true,
            title: 'task 2',
            description: 'creer un app 2'
        },
        {
            id:3,
            done: false,
            title: 'task 3',
            description: 'creer un app 3'
        }
    ]

    getAll(): Todo[] {
        return this.todos;
    }
}
