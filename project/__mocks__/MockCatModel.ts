import {Cat} from '../src/animals/cats/interfaces/cat.interface';
import { Model } from 'mongoose';

export class MockCatModel extends Model<Cat> {}