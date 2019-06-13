import {Controller, Get, Param} from '@nestjs/common';
import {CatsService} from "./cats/cats.service";
import {Animal} from "./animal";


@Controller('animals/')
export class AnimalsController {
    constructor(private readonly catsService: CatsService) {}

    util(animal){
        switch(animal){
            case('cats') : return this.catsService;
            //case('dogs') : return this.dogsService;
        }
    }

    @Get(':animal')
    async findAllAnimals(@Param('animal') animal: string) {
        return this.util(animal).findAll();
    }




}
