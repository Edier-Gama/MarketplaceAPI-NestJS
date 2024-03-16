/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './products/categories.module';
import { CustomersModule } from './users/customers.module';
import { OrdersModule } from './users/orders.module';

const API_KEY = '12345'
@Module({
  imports: [ProductsModule, UsersModule, BrandsModule, CategoriesModule, CustomersModule, OrdersModule],
  controllers: [AppController],
  providers: [
    AppService, 
    {provide: 'API_KEY', useValue: API_KEY},
    {
      provide: 'TASK',
      useFactory: async () => {
        const request = await fetch('https://jsonplaceholder.typicode.com/todos')
        const task = await request.json()
        return task
      },
    }
  
  ],
})
export class AppModule {}

