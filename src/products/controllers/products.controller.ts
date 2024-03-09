/* eslint-disable prettier/prettier */
import { Body, Controller } from '@nestjs/common';
import { Get, Param, Query, Post, Delete, Put, ParseIntPipe} from '@nestjs/common'
import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/products/dtos/products.dtos';


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
  getProductById(@Param('id', ParseIntPipe) id: number){
    return this.productsService.findProductById(id)
  }

  @Post()
  createProduct(@Body() bodyData: CreateProductDto){
    const {id, name, price} = bodyData
    const product : CreateProductDto = {
        id: id,
        name: name,
        price: price
    }
    return this.productsService.createProduct(product)
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto){
    return this.productsService.updateProduct(id, payload)
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number){
    return this.productsService.deleteProduct(id)
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
