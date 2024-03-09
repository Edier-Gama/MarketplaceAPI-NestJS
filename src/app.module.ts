/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './products/categories.module';
import { CustomersModule } from './users/customers.module';
import { OrdersModule } from './products/orders.module';

@Module({
  imports: [ProductsModule, UsersModule, BrandsModule, CategoriesModule, CustomersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

