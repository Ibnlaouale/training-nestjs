import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
async function bootstrap() {
  mongoose.connect('mongodb://localhost:27017/todoList')
  .then(() =>{
    console.log('Mongodb is connected successfully');
 })
 .catch(() => {   console.log('Mongodb connexion failed ');
 })
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
