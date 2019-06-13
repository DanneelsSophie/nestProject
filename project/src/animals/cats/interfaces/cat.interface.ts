import { Document } from 'mongoose';
import {Animal} from "../../animal";

export interface Cat extends Document,Animal {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}