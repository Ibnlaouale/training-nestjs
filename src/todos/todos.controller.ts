import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { createTodoDto } from './dto/createTodoDto.dto';
import { identity } from 'rxjs';

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

    @Patch(':id')
    
    upDateTido(@Param('id') id: number, @Body() todo: createTodoDto){
        return this.todosServices.edittask(id, todo as Todo);
    }
  

    @Delete(':id')

    deletetodo(@Param('id') id: number){
        return this.todosServices.deleteTodo(id);
    }
}
