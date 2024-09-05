import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { createTodoDto } from './dto/createTodoDto.dto';

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

    getOne(id: number){
    //    console.log('finded since service ===>', this.todos.find( todo => todo.id === Number(id)));
        return this.todos.find( todo => todo.id === Number(id))
    }


    createNewTask(newTask: createTodoDto){
         this.todos = [...this.todos, newTask as Todo];
    }


    
}
