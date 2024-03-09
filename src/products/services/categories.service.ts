/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {

    public categories = [
        { id: 1, categoryName: 'Tecnología', productsCategory: [] },
        { id: 2, categoryName: 'Ropa', productsCategory: [] },
        { id: 3, categoryName: 'Hogar', productsCategory: [] },
        { id: 4, categoryName: 'Deportes', productsCategory: [] },
        { id: 5, categoryName: 'Belleza', productsCategory: [] },
        { id: 6, categoryName: 'Juguetes', productsCategory: [] },
        { id: 7, categoryName: 'Libros', productsCategory: [] },
    ]

    getAllCategories(){
        return this.categories
    }

    getCategorieById(id: number) {
        const category = this.categories.find((category) => {
            const categorySelected = category.id === id
            return categorySelected
        })
        return {
            message: `El id es ${id}`,
            category: category
        }
    }
}
