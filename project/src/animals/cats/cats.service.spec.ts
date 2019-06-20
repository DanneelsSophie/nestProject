import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import {CreateCatDto} from './dto/create-cat.dto';
const Chance = require('chance');
import {MockCatModel} from '../../../__mocks__/MockCatModel';
jest.mock('../../../__mocks__/MockCatModel');

describe('CatsService', () => {
    let service: CatsService;
    let catProvider;
    let chance ;
    let createCatDot: CreateCatDto;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [],
            providers: [CatsService,
                {provide: 'CAT_MODEL',
                    useValue: MockCatModel}]
            ,
        }).compile()
        service = module.get<CatsService>(CatsService);
        catProvider = module.get<'CAT_MODEL'>('CAT_MODEL');

    });

    beforeEach(() => {
        chance = new Chance();
        createCatDot = <CreateCatDto> {name: 'Miaouuu', age: 5, breed: 'Munchkin'};

    })

    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('find', async () => {
        jest.spyOn(catProvider, 'find').mockImplementation(
            jest.fn(() => (
                { exec : jest.fn(
                    () => Promise.resolve([{id: 1, name: 'miaou1', age: 4, breed: 'Siamois'}, {id: 2, name: 'miaou2', age: 4, breed: 'Siamois'}])),
                }),
        ));
        const value = await service.findAll();
        expect(value).toStrictEqual([{id: 1, name: 'miaou1', age: 4, breed: 'Siamois'}, {id: 2, name: 'miaou2', age: 4, breed: 'Siamois'}]);
        expect(catProvider.find).toHaveBeenCalledTimes(1);
        expect(catProvider.find).toBeCalledWith();
    });

    it('findById', async () => {
       jest.spyOn(catProvider, 'findById').mockImplementation(jest.fn((variableId) => ({
               exec : jest.fn(
                   () => Promise.resolve({ id: variableId, name: 'miaou1', age: 4, breed: 'Siamois'})),
           }),
       ));
       const chanceString = chance.string();
       let value = await service.findById(chanceString);
       expect(value).toStrictEqual({id: chanceString, name: 'miaou1', age: 4, breed: 'Siamois'});
       expect(catProvider.findById).toHaveBeenCalledTimes(1);
       expect(catProvider.findById).lastCalledWith(chanceString);
       const variableId = '1';
       value = await service.findById(variableId);
       expect(value).toStrictEqual({id: variableId, name: 'miaou1', age: 4, breed: 'Siamois'});
       expect(catProvider.findById).toHaveBeenCalledTimes(2);
       expect(catProvider.findById).lastCalledWith('1');
    });

    it('updateById', async () => {
        jest.spyOn(catProvider, 'findOneAndUpdate').mockImplementation(jest.fn((_, createCatDto  ) =>  Promise.resolve(createCatDto)));
        const chanceString = chance.string();
        const option = {new: true}
        let value = await service.updateById(chanceString, createCatDot);
        expect(value).toStrictEqual(createCatDot);
        expect(catProvider.findOneAndUpdate).toHaveBeenCalledTimes(1);
        expect(catProvider.findOneAndUpdate).lastCalledWith(chanceString, createCatDot, option);
        const variableId = '1';
        value = await service.updateById(variableId, createCatDot);
        expect(value).toStrictEqual(createCatDot);
        expect(catProvider.findOneAndUpdate).toHaveBeenCalledTimes(2);
        expect(catProvider.findOneAndUpdate).lastCalledWith(variableId, createCatDot, option);
    });

    it('deleteById', async () => {
        jest.spyOn(catProvider, 'findOneAndDelete').mockImplementation(jest.fn(( variableId) =>  Promise.resolve(variableId)));
        const chanceString = chance.string();
        let value = await service.deleteById(chanceString);
        expect(value).toStrictEqual(chanceString);
        expect(catProvider.findOneAndDelete).toHaveBeenCalledTimes(1);
        expect(catProvider.findOneAndDelete).lastCalledWith(chanceString);
        const variableId = '1';
        value = await service.deleteById(variableId);
        expect(value).toStrictEqual(variableId);
        expect(catProvider.findOneAndDelete).toHaveBeenCalledTimes(2);
        expect(catProvider.findOneAndDelete).lastCalledWith(variableId);
    });

    it('create', async () => {
        jest.spyOn(catProvider.prototype, 'save').mockImplementation(
            jest.fn(() => Promise.resolve({id: 1, name: 'miaou1', age: 4, breed: 'Siamois'}))
        );
        jest.spyOn(catProvider.prototype, 'constructor');
        const value = await service.create(createCatDot);
        expect(value).toStrictEqual({ age: 4, breed: 'Siamois', id: 1, name: 'miaou1'});
        expect(catProvider.prototype.save).toHaveBeenCalledTimes(1);
        expect(catProvider.prototype.save).toBeCalledWith();
        expect(catProvider.prototype.constructor).toHaveBeenCalledTimes(1);
        expect(catProvider.prototype.constructor).toBeCalledWith(createCatDot);
    });

});
