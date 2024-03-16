/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { UsersService } from '../services/users.service';
@Controller('users')
export class UsersController {
    constructor(public usersService: UsersService){}
    @Get()
    getAllUsers() {
        return {message: "Todos los usuarios"}
    }
    
    @Get(':id/orders')
    deleteProduct(@Param('id', ParseIntPipe) id: number){
      return this.usersService.findOrderByUserId(id)
    }
}
