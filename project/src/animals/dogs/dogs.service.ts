import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './interfaces/dog.interface';

@Injectable()
export class DogsService {
    constructor(@Inject('DOG_MODEL') private readonly dogModel: Model<Dog>) {}

    async create(createDogDto: CreateDogDto): Promise<Dog> {
        const createdDog = new this.dogModel(createDogDto);
        return await createdDog.save();
    }

    async findAll(): Promise<Dog[]> {
        return await this.dogModel.find().exec();
    }

    async findById(id: string): Promise<Dog> {
        return await this.dogModel.findById(id).exec();
    }

    async deleteById(id: string): Promise<Dog> {
        return await this.dogModel.findOneAndDelete(id);
    }

    async updateById(id:string, createDogDto: CreateDogDto){
        return await this.dogModel.findOneAndUpdate(id, createDogDto, {new: true});
    }

}