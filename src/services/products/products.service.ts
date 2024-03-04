/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products : Array[] = [
        { id: 1, nombre: 'Chaqueta de Cuero Clásica', precio: 149.99 },
        { id: 2, nombre: 'Cafetera Premium', precio: 89.99 },
        { id: 3, nombre: 'Smartphone X Pro', precio: 699.99 },
        { id: 4, nombre: 'Tocadiscos Vintage', precio: 249.99 },
        { id: 5, nombre: 'Gafas de Sol de Diseñador', precio: 129.99 },
    ];
      
}
