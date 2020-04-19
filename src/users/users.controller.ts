import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from '../models/user.interface';

@Controller('users')
export class UsersController {
    constructor( private usersService:UsersService ){

    }

    @Post()
    addUser( @Body() userModel:UserModel ):any{
        return this.usersService.saveUser( userModel );
    }

    @Get()
    getUser():any{
        return this.usersService.findAll();
    }

    @Get(':id')
    getOneUser( @Param() params ):any {
        return this.usersService.findOnUser( params.id );
    }

    @Put(':id')
    updateUser( @Body() userModel:UserModel,  @Param() params ): any{
        return this.usersService.updateUser( params.id, userModel );
    }

    @Delete(':id')
    deleteUser( @Param() params ):any {
        return this.usersService.deleteUser( params.id );
    }
}
