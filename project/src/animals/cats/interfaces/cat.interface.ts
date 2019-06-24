import {Animal} from "../../animal";
import {Document} from "mongoose";

export interface Cat extends Animal, Document  {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}