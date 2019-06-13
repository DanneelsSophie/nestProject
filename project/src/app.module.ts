import { Module } from '@nestjs/common';
import { CatsModule } from './animals/cats/cats.module';
import {DogsModule} from "./animals/dogs/dogs.module";
import {AnimalsModule} from "./animals/animals.module";

@Module({
    imports: [CatsModule,DogsModule,AnimalsModule],
})
export class ApplicationModule {}