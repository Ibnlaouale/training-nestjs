import { Controller, Get } from '@nestjs/common';
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
}
