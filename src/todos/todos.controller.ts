import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { createTodoDto } from './dto/createTodoDto.dto';

// localhost:3000/dotos
@Controller('todos')
export class TodosController {

    constructor(private readonly todosServices: TodosService){}

    @Get() 
    findAll(): Todo[] {
        return this.todosServices.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){

        //console.log('type de ID ====>', typeof(id));
        // console.log('id since controller ====>', Number(id));
        // console.log('value finded ======', this.todosServices.getOne(Number(id)));
        
        return this.todosServices.getOne(Number(id))

    }

    @Post()
    createTodo(@Body() newTodo: createTodoDto){
        // console.log("newTodo ===>", newTodo);
        this.todosServices.createNewTask(newTodo)
    }

  

}
