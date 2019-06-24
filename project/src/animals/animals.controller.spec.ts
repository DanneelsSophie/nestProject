import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';

import {CatsService} from "./cats/cats.service";
import {DogsService} from "./dogs/dogs.service";


const mockCatService = new (jest.fn(() => ({
    findById :  jest.fn( id =>
            new Promise (function(resolve,reject) {
                if (id == -1) reject("erreur")
                else resolve({id: parseInt(id), name: "miaou1", age: 4, breed: "Siamois"})
            })),

    findAll : jest.fn().mockResolvedValue([{id:1, name: "miaou1", age: 4, breed: "Siamois"},{id:2, name: "miaou2", age: 4, breed: "Siamois"}]),
})))();


const mockDogService = new (jest.fn(() => ({
    findById :  jest.fn( id =>
        new Promise (function(resolve,reject) {
            if (id == -1) reject("erreur")
            else resolve({id: parseInt(id), name: "ouaf1", age: 4, breed: "Berger Allemand"})
        })),
    findAll: jest.fn().mockResolvedValue([{id:1, name: "ouaf1", age: 4, breed: "Berger Allemand"},{id:2, name: "ouaf2", age: 4, breed: "Berger Allemand"}]),

})))();


describe('Animals Controller', () => {

    let controller: AnimalsController;
    afterEach(() => {
        jest.clearAllMocks()
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AnimalsController],
            providers: [{provide: CatsService, useValue: mockCatService}, {provide: DogsService, useValue: mockDogService
            }]
        }).compile();


        controller = module.get<AnimalsController>(AnimalsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    /** CATS **/


    it('check it is a catService findAll',  () => {
        controller.findAllAnimals("cats").then(function (value) {
            expect(value).toStrictEqual([{id:1, name: "miaou1", age: 4, breed: "Siamois"},{id:2, name: "miaou2", age: 4, breed: "Siamois"}]);
            expect(mockCatService.findAll).toHaveBeenCalledTimes(1);
            expect(mockDogService.findAll).toHaveBeenCalledTimes(0);
        });
    });


    it('check it is a catService findById catch',() =>{
        controller.findOne( "-1","cats").catch(function (value) {
            expect(value).toStrictEqual("erreur");
            expect(mockCatService.findById).nthCalledWith(1,"-1");
            expect(mockDogService.findById).toHaveBeenCalledTimes(0);
            expect(mockCatService.findById).toHaveBeenCalledTimes(1);
        })
    })

    it('check it is a catService findById  then',  async() => {
        const value = await controller.findOne( "4","cats");
        expect(value).toStrictEqual({id: 4, name: "miaou1", age: 4, breed: "Siamois"});
        expect(mockCatService.findById).nthCalledWith(1,"4")
        expect(mockDogService.findById).toHaveBeenCalledTimes(0);
        expect(mockCatService.findById).toHaveBeenCalledTimes(1);
    });

    /** DOGS **/

    it('check it is a dogService findAll', () => {
        controller.findAllAnimals("dogs").then(function (value) {
            expect(value).toStrictEqual([{id:1, name: "ouaf1", age: 4, breed: "Berger Allemand"},{id:2, name: "ouaf2", age: 4, breed: "Berger Allemand"}]);
            expect(mockDogService.findAll).toHaveBeenCalledTimes(1);
            expect(mockCatService.findAll).toHaveBeenCalledTimes(0);
        });
    });


});

