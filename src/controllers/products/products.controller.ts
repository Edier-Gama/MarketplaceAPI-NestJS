/* eslint-disable prettier/prettier */
import { Body, Controller } from '@nestjs/common';
import { Get, Param, Query, Post, Delete, Put} from '@nestjs/common'
import { Product } from 'src/entities/product.entity';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
// el controlador nos indica el endopoint base, al crear nuevos no debemos añadir
// products/content si no solo ('content')
export class ProductsController {
  // recibir el servicio:
  constructor(private productsService: ProductsService){}
  
  @Get()
  getProducts(){
    return this.productsService.findAll()
  }

  @Get(':id')
  getProductById(@Param('id') id: string){
    const parsedId = parseInt(id)
    return this.productsService.findProductById(parsedId)
  }

  @Post()
  createProduct(@Body() bodyData: any){
    const {productName, price} = bodyData
    const product : Product = {
        nombre: productName,
        precio: price
    }
    return this.productsService.createProduct(product)
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() payload: any){
    const parsedId = parseInt(id)
    return this.productsService.updateProduct(parsedId, payload)
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string){
    const parsedId = parseInt(id)
    return this.productsService.deleteProduct(parsedId)
  }

  // Recibir doble parámetro en una misma consulta:

  @Get(':id/category/:categoryName')
  // Para una consulta de doble parámetro solo llamamos al otro separado por una coma
  getProductByCategory(@Param('id') id: string, @Param('categoryName') categoryName: string){
    const response = {
        message: `Your product has an ID ${id}, and is part of the category ${categoryName}`
    }
    return response
  }

  // Recibir querys

  @Get('querys')
  getQuerys
  (
    @Query('limit')limit :number, 
    @Query('offset') offset: number, 
    @Query('category') category:string
  )
  {
    const response = {
        message: `Tu query limit es: ${limit} Tu query offset es:${offset} 
        Tu query category es: ${category}`
    }
    return response
  }
}
