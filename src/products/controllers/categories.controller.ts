/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){}

    @Get()
    getAllCategories(){
        return this.categoriesService.getAllCategories()
    }

    @Get(':id')
    getCategoryById(@Param('id', ParseIntPipe) id: number){
        return this.categoriesService.getCategorieById(id)
    }
}
