import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository( UserEntity )
        private readonly userRP: Repository<UserEntity>){
        
    }

    async saveUser( user:any ){
        await this.userRP.insert( user );
        return user
    }

    async updateUser( id:number, user:any ){
        await this.userRP.update( id, user );
    }

    async findAll(){
        return await this.userRP.find();
    }

    async findOnUser( id:number ){
        return await this.userRP.findOne( id );
    }

    async deleteUser( id:number ){
        return await this.userRP.delete( id );
    }
}
