/* eslint-disable prettier/prettier */

import {IsString, IsNumber, IsNotEmpty, IsPositive} from 'class-validator'


// Un Data transfer object se crea parecido a una clase

export class CreateProductDto {
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly id: number
    
    @IsString({message: 'El nombre debe ser un texto'})
    @IsNotEmpty()
    readonly name: string

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number
}
export class UpdateProductDto {
    readonly id?: number
    readonly nombre?: string
    readonly precio?: number
}
