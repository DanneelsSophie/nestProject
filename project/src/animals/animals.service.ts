import { Model } from 'mongoose';
import {Animal} from "./animal";

export interface AnimalService {
    findAll(): Promise<Animal[]> ;
    findById(id: string): Promise<Animal> ;
    deleteById(id: string): Promise<Animal>;
}