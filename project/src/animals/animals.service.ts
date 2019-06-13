import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {Animal} from "./animal";

@Injectable()
export interface AnimalService {

   /**async create(createCatDto: CreateCatDto): Promise<Animal> {
        const createdCat = new this.catModel(createCatDto);
        return await createdCat.save();  ABSTRACT AFTER **/

    findAll(): Promise<Animal[]> ;
    findById(id: string): Promise<Animal> ;
    deleteById(id: string): Promise<Animal>;


}