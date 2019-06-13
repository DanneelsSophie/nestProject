import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto);
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.catsService.findById(id);
    }

    @Delete(':id')
    DeleteOneById(@Param('id') id: string) {
        return this.catsService.deleteById(id);
    }

    @Put(':id')
    UpdateOneById(@Param('id') id: string, @Body() createCatDto: CreateCatDto ){
        return this.catsService.updateById(id,createCatDto);
    }

}