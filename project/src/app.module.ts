import { Module } from '@nestjs/common';
import { CatsModule } from './animals/cats/cats.module';
import { AnimalsController } from './animals/animals.controller';
import {DogsModule} from "./animals/dogs/dogs.module";

@Module({
    imports: [CatsModule,DogsModule],
    controllers: [AnimalsController],
})
export class ApplicationModule {}