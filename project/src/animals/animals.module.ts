import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import {AnimalsController} from "./animals.controller";
import {CatsProviders} from "./cats/cats.providers";
import {CatsService} from "./cats/cats.service";

@Module({
    imports: [DatabaseModule],
    controllers: [AnimalsController],
    providers: [CatsService, ...CatsProviders],

})
export class AnimalsModule {}