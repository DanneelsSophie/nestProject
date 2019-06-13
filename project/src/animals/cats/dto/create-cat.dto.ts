import {Animal, AnimalPattern} from "../../animal";

export class CreateCatDto  extends Animal {

    readonly name: string;
    readonly age: number;
    readonly breed: string;


    match<T>(p: AnimalPattern<T>): T {
        return p.Cat(this);
    }
}
