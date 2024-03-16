/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private API_KEY: string,
    @Inject('TASK') private TASKS: any[]
  ){}
  // El nombre que recibe el Inject debe ser el mismo que usamos en el provide

  getHello(){
    console.log(this.TASKS)
    return `Hola, tu APIKEY es ${this.API_KEY}`;
  }
}
