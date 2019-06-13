import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog.interface';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogsService: DogsService) {}

    @Post()
    async create(@Body() createDogDto: CreateDogDto) {
        console.log(createDogDto);
        this.dogsService.create(createDogDto);
    }

    @Get()
    async findAll(): Promise<Dog[]> {
        return this.dogsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.dogsService.findById(id);
    }

    @Delete(':id')
    DeleteOneById(@Param('id') id: string) {
        return this.dogsService.deleteById(id);
    }

    @Put(':id')
    UpdateOneById(@Param('id') id: string, @Body() createDogDto: CreateDogDto ){
        return this.dogsService.updateById(id,createDogDto);
    }

}