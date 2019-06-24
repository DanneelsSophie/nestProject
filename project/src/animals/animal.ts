
import {Cat} from "./cats/interfaces/cat.interface";
import {Dog} from "./dogs/interfaces/dog.interface";

export interface AnimalPattern<T> {
    Dog: (dog: Dog) => T;
    Cat: (cat: Cat) => T;
}

export interface AnimalMatcher {
    match<T>(p: AnimalPattern<T>): T;
}

export abstract class Animal implements AnimalMatcher {
    abstract match<T>(p: AnimalPattern<T>): T;
}
