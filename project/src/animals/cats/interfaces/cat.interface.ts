import {Animal} from "../../animal";

export interface Cat extends Animal {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}