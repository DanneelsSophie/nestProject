import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import {CatsProviders} from "./cats.providers";

export const mockCatModel = jest.fn();

describe('CatsService', () => {
    let service: CatsService;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CatsService,...CatsProviders,  {
                provide: 'catModel',
                useClass: mockCatModel,
            },],
        }).compile();
        service = module.get<CatsService>(CatsService);
    });

    beforeEach(() => {
        //service.beers = [{ id: 1, stock: 2 }, { id: 2, stock: 0 }];
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });





});
