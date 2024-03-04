/* eslint-disable prettier/prettier */
import { Body, Controller } from '@nestjs/common';
import { Get, Param, Query, Post, Delete, Put} from '@nestjs/common'
import { HttpStatus, HttpCode } from '@nestjs/common';


@Controller('products')
// el controlador nos indica el endopoint base, al crear nuevos no debemos añadir
// products/content si no solo ('content')
export class ProductsController {
  // Recibir parámetros 

  @Get()
  getProducts(): object{
    const products = {id: 222, name: 'Leche de Vaca', price: 1090}
    return products
  }

  @Get(':id')
  getProductById(@Param('id') id: string): object {
    const product = {
      name: 'Leche de Vaca',
      id: id
    }
    return product
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

  @Post()
  @HttpCode(HttpStatus.OK)
  createProduct(@Body() bodyData: any){
    const {product, price, owner} = bodyData
    return {
        name: `producto ${product}, creado con éxito`,
        createdBy: owner,
        price: price
    }
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() payload: any){
    return {
        "message": "Producto editado con éxito",
        payload,
        id
    }
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number){
    return {
        "message": "Producto eliminado con éxito",
        id
    }
  }
}
