import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import {AnimalService} from "../animals.service";

@Injectable()
export class CatsService implements AnimalService {
    constructor(@Inject('CAT_MODEL') private readonly catModel: Model<Cat>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec();
    }

    async findById(id: string): Promise<Cat> {
        return await this.catModel.findById(id).exec();
    }

    async deleteById(id: string): Promise<Cat> {
        return await this.catModel.findOneAndDelete(id);
    }

    async updateById(id:string, createCatDto: CreateCatDto){
        return await this.catModel.findOneAndUpdate(id, createCatDto, {new: true});
    }

}