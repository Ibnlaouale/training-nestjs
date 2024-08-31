import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

// localhost:3000/dotos
@Controller('todos')
export class TodosController {

    constructor(private readonly todosServices: TodosService){}

    @Get() 
    findAll(): Todo[] {
        return this.todosServices.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        // console.log('id ====>', id);
        
        return this.todosServices.getOne(id)
    }

    @Post()
    createTodo(@Body() newTodo){
        // console.log("newTodo ===>", newTodo);
        
        this.todosServices.createNewTask(newTodo)
    }
}
