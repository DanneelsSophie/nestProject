import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import {Cat} from "./cats/interfaces/cat.interface";
import {Dog} from "./dogs/interfaces/dog.interface";

import {CatsService} from "./cats/cats.service";
jest.mock('./cats/cats.service');

import {DogsService} from "./dogs/dogs.service";
jest.mock('./dogs/dogs.service');

var Chance = require('chance');


describe('Animals Controller', () => {
    let serviceCat: CatsService, serviceDog: DogsService;
    let controller: AnimalsController;
    afterEach(() => {
        jest.clearAllMocks()
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AnimalsController],
            providers: [CatsService,DogsService]
        }).compile();


        controller = module.get<AnimalsController>(AnimalsController);
        serviceCat = module.get(CatsService);
        serviceDog = module.get(DogsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });



    it('check it is a noService findAll Mock ',  () => {
        controller.findAllAnimals("frogs").catch(function (value) {
            expect(value.message).toBe("No animal :'( frogs");
            expect(value.name).toBe('Error');
            expect(serviceCat.findAll).toHaveBeenCalledTimes(0);
            expect(serviceDog.findAll).toHaveBeenCalledTimes(0);
        });
    });

    it('check it is a noService findAll Random ',  () => {
        var chance = new Chance();
        var my_random_string = chance.string();
        console.log(my_random_string);
        if (my_random_string != 'dogs' && my_random_string != 'cats'){
            controller.findAllAnimals(my_random_string).catch(function (value) {
                expect(value.message).toBe(`No animal :'( ${my_random_string}`);
                expect(value.name).toBe('Error');
                expect(serviceCat.findAll).toHaveBeenCalledTimes(0);
                expect(serviceDog.findAll).toHaveBeenCalledTimes(0);
            });
        }
    });


    it('check it is a catService findAll Mock ',  () => {
        jest.spyOn(serviceCat, 'findAll').mockResolvedValue([<Cat>{ name: "miaou1", age: 4, breed: "Siamois"},<Cat>{name: "miaou2", age: 4, breed: "Siamois"}]);
        controller.findAllAnimals("cats").then(function (value) {
            expect(value).toStrictEqual([{name: "miaou1", age: 4, breed: "Siamois"},{ name: "miaou2", age: 4, breed: "Siamois"}]);
            expect(serviceCat.findAll).toHaveReturned();
            expect(serviceDog.findAll).toHaveBeenCalledTimes(0);
        });
    });


    it('check it is a dogService findAll Mock ',  () => {
        jest.spyOn(serviceDog, 'findAll').mockResolvedValue([<Dog>{ name: "ouaf", age: 4, breed: "Berger Allemand"},<Dog>{name: "ouuaf", age: 4, breed: "Berger Allemand"}]);
        controller.findAllAnimals("dogs").then(function (value) {
            expect(value).toStrictEqual([{name: "ouaf", age: 4, breed: "Berger Allemand"},{ name: "ouuaf", age: 4, breed: "Berger Allemand"}]);
            expect(serviceCat.findAll).toHaveBeenCalledTimes(0)
            expect(serviceDog.findAll).toHaveReturned();
        });
    });


    it('check it is a catService findById resolve',  () => {
        jest.spyOn(serviceCat, 'findById').mockResolvedValue(<Cat>{name: "miaou2", age: 4, breed: "Siamois"});
        controller.findOne("1","cats").then(function (value) {
            expect(value).toStrictEqual({name: "miaou2", age: 4, breed: "Siamois"});
            expect(serviceCat.findById).toHaveBeenCalledTimes(1);
            expect(serviceDog.findById).toHaveBeenCalledTimes(0);
            expect(serviceCat.findById).toHaveBeenLastCalledWith("1");
        });
    });


    it('check it is a catService findById reject',  () => {
        jest.spyOn(serviceCat, 'findById').mockRejectedValue("erreur");
        controller.findOne("-1","cats").catch(function (value) {
            expect(value).toStrictEqual("erreur");
            expect(serviceCat.findById).toHaveBeenCalledTimes(1);
            expect(serviceDog.findById).toHaveBeenCalledTimes(0);
            expect(serviceCat.findById).toHaveBeenLastCalledWith("-1");
        });
    });

});

