/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers() {
        return {message: "Todos los usuarios"}
    }
}
