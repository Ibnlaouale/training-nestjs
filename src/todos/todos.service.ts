import { Injectable, NotFoundException } from '@nestjs/common';
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

    
    edittask(id: number, todo : Todo){
        // recuperation l'element à modifier
            let todoToUpdate =  this.todos.find( todo => todo.id === Number(id))
        // appliquer les modifications
        if (!todoToUpdate) {
            return new NotFoundException('Not found todo');
        }
        
        if(todo.hasOwnProperty('done')){
            todoToUpdate.done = todo.done;
        }

        if (todo.title) {
            todoToUpdate.title = todo.title;
        }
        if (todo.description) {
            todoToUpdate.title = todo.description;
        }

        const todosUpdate = this.todos.map(td => td.id !== Number(id) ? td : todoToUpdate);
        this.todos = [...todosUpdate];
        return {updatedTodo: 1, todo: todoToUpdate}
    }

    deleteTodo(id: number){
        const nbTodoBeforeDelete = this.todos.length;
        this.todos = [...this.todos.filter(td => td.id !== Number(id))];

        if ( this.todos.length < nbTodoBeforeDelete) {
            return {deleteTodo: 1, nbTodos: this.todos.length}
        } else {

             return {deleteTodo: 0, nbTodos: this.todos.length}
        }
    }
    
}
