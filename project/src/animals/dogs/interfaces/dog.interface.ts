import { Document } from 'mongoose';
import {Animal} from "../../animal";

export interface Dog extends Animal {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}