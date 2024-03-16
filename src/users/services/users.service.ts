/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ProductsService } from "src/products/services/products.service";
@Injectable()
export class UsersService {
    constructor(public productsService: ProductsService){}

    private users = [
        { id:1, name: 'Ana García', email: 'ana.garcia@ejemplo.com' },
        { id:2, name: 'Juan Pérez', email: 'juan.perez@ejemplo.com' },
        { id:3, name: 'María López', email: 'maria.lopez@ejemplo.com' },
        { id:4, name: 'Pedro Martínez', email: 'pedro.martinez@ejemplo.com' },
        { id:5, name: 'Sofía González', email: 'sofia.gonzalez@ejemplo.com' },
        { id:6, name: 'David Rodríguez', email: 'david.rodriguez@ejemplo.com' },
        { id:7, name: 'Laura Fernández', email: 'laura.fernandez@ejemplo.com' },
        { id:8, name: 'Miguel Sánchez', email: 'miguel.sanchez@ejemplo.com' },
        { id:9, name: 'Cristina Martín', email: 'cristina.martin@ejemplo.com' },
        { id:10, name: 'Javier García', email: 'javier.garcia@ejemplo.com' },
    ]

    findOrderByUserId(id: number){
        const user = this.users.find((user) => user.id === id)
        return {
            message: 'Users orders:',
            user: user,
            orders: this.productsService.findAll()
        }
    }
}