/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
@Injectable()
export class ProductsService {
    private products = [
        { id: 1, name: 'Chaqueta de Cuero Clásica', price: 149.99 },
        { id: 2, name: 'Cafetera Premium', price: 89.99 },
        { id: 3, name: 'Smartphone X Pro', price: 699.99 },
        { id: 4, name: 'Tocadiscos Vintage', price: 249.99 },
        { id: 5, name: 'Gafas de Sol de Diseñador', price: 129.99 },
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
        if(!product){
            throw new HttpException('No se ha encontrado el producto', HttpStatus.BAD_REQUEST)
        }
        return product
    }
    createProduct(product: CreateProductDto){
        const newProduct = product
        this.products.push(newProduct)
        const response = {
            "message": "product created successfully",
            "product": newProduct
        }
        return response
    }

    updateProduct(id: number, payload: UpdateProductDto){
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
