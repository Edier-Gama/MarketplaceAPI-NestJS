/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    public users = [
        {id: 10, name: "username", email: "user@domain.com"}
    ]
}