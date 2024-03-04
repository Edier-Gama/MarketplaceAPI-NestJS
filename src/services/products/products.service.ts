/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
@Injectable()
export class ProductsService {
    private products :Product[]= [
        { id: 1, nombre: 'Chaqueta de Cuero Clásica', precio: 149.99 },
        { id: 2, nombre: 'Cafetera Premium', precio: 89.99 },
        { id: 3, nombre: 'Smartphone X Pro', precio: 699.99 },
        { id: 4, nombre: 'Tocadiscos Vintage', precio: 249.99 },
        { id: 5, nombre: 'Gafas de Sol de Diseñador', precio: 129.99 },
    ];

    findAll(){
        return {
            "message": "All products",
            "products": this.products
        }
    }
    findProductById(id: number){
        const product = this.products.find((product) => {
            return product.id === id
        })
        return product
    }
    createProduct(product: Product){
        const newProduct = product
        this.products.push(newProduct)
        const response = {
            "message": "product created successfully",
            "product": newProduct
        }
        return response
    }

    updateProduct(id: number, payload: object){
        const index = this.products.findIndex((product) => {
            return product.id === id
        })
        if (index !== -1) {
            const newProduct = {
                ...this.products[index],
                ...payload
            }
            this.products[index] = newProduct
            return {
                "message": "Producto actualizado con éxito",
                "new_product": newProduct
            }
        } else {
        console.error(`Producto con id ${id} no encontrado.`);
        return null
    }
    }
    deleteProduct(id: number){
        const index = this.products.findIndex((product) => {
            return product.id === id
        })
        if (index !== -1) {
            this.products.splice(index, 1)
            return {
                "message": "Producto eliminado correctamente"
            }
        } else {
        console.error(`Producto con id ${id} no encontrado.`);
        return null
    }
    }
}
