import {Cat} from "./cats/interfaces/cat.interface";
import {Dog} from "./dogs/interfaces/dog.interface";
import { Document } from 'mongoose';

export interface AnimalPattern<T> {
    Dog: (dog: Dog) => T;
    Cat: (cat: Cat) => T;
}

export interface AnimalMatcher {
    match<T>(p: AnimalPattern<T>): T;
}

export abstract class Animal extends Document implements AnimalMatcher {
    abstract match<T>(p: AnimalPattern<T>): T;
}