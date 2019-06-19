///<reference path="interfaces/cat.interface.ts"/>
import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';



const mockCatModel = new (jest.fn(() => ({
    find :  jest.fn(),

    findAll : jest.fn().mockResolvedValue([{id:1, name: "miaou1", age: 4, breed: "Siamois"},{id:2, name: "miaou2", age: 4, breed: "Siamois"}]),
})))();



describe('CatsService', () => {
    let service: CatsService;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [],
            providers: [CatsService,
                {provide: 'CAT_MODEL',
                    useValue: mockCatModel}
               ]
            ,
        })
            .compile()
        service = module.get<CatsService>(CatsService);

    });

    beforeEach(() => {
        //service.beers = [{ id: 1, stock: 2 }, { id: 2, stock: 0 }];
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });




    it('testing', () => {
       service.findAll().then(function(test){
           console.log(test)
       });
    });

});
