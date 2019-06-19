import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import {AnimalsController} from "./animals.controller";
import {CatsProviders} from "./cats/cats.providers";
import {CatsService} from "./cats/cats.service";
import {DogsService} from "./dogs/dogs.service";
import {DogsProviders} from "./dogs/dogs.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [AnimalsController],
    providers: [CatsService, ...CatsProviders,DogsService, ...DogsProviders],

})
export class AnimalsModule {}