import {Animal, AnimalPattern} from "../../../animals/animal";

export class CreateDogDto  extends Animal {

    readonly name: string;
    readonly age: number;
    readonly breed: string;


    match<T>(p: AnimalPattern<T>): T {
        return p.Dog(this);
    }
}
