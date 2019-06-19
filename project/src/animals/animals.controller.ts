import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, HttpException} from '@nestjs/common';
import {CatsService} from "./cats/cats.service";
import {DogsService} from "./dogs/dogs.service";
import {CreateCatDto} from "./cats/dto/create-cat.dto";
import {Animal} from "./animal";


interface AnimalServicePattern<T>{
    CatService: () => CatsService;
    DogService: () => DogsService;
    Other: (animal)  => HttpException; // RESPONSE FALSE
}


function matchAnimalService<T>(p: AnimalServicePattern<T>){
    return (animal : string) => {
        switch(animal){
            case('cats') : return p.CatService();
            case('dogs') : return p.DogService();
            default: return p.Other(animal);
        }
    }

}

@Controller('animals/:animal')
export class AnimalsController {
    match;

    constructor(private readonly catsService: CatsService,private readonly dogsService: DogsService )
    {
        this.match = matchAnimalService(
            {
                CatService: () => catsService,
                DogService: () => dogsService,
                Other: (animal) =>
                    {
                    throw new HttpException(
                    `No animal :'( ${animal}`,HttpStatus.NOT_FOUND)
                    }
                 });

    }


    @Get ()
    async findAllAnimals(@Param('animal') animal: string) : Promise<Animal[]> {
        return this.match(animal).findAll();
    }


    @Delete(':id')
    async deleteOneById(@Param('animal') animal: string,@Param('id') id: string) {
        return this.match(animal).deleteById(id);
    }

    @Post()
    async create(@Param('animal') animal: string, @Body() createCatDto: CreateCatDto) {
        this.match(animal).create(createCatDto);
    }


    @Get(':id')
    findOne(@Param('id') id: string,@Param('animal') animal: string) {
        return this.match(animal).findById(id);
    }

    @Delete(':id')
    DeleteOneById(@Param('id') id: string,@Param('animal') animal: string) {
        return this.match(animal).deleteById(id);
    }

    @Put(':id')
    UpdateOneById(@Param('id') id: string, @Body() createCatDto: CreateCatDto,@Param('animal') animal: string ){
        return this.match(animal).updateById(id,createCatDto);
    }


}
