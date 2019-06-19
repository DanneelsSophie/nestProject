import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {AnimalsModule} from "../src/animals/animals.module";
import {CatsService} from "../src/animals/cats/cats.service";
import {DogsService} from "../src/animals/dogs/dogs.service";

describe('Cats', () => {
    let app: INestApplication;
    let catsService = { findAll: () => ['test'] };
    let dogsService = { findAll: () => ['test'] };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AnimalsModule],
        })
            .overrideProvider(CatsService)
            .useValue(catsService)
            .overrideProvider(DogsService)
            .useValue(dogsService)
            .compile();

        app = module.createNestApplication();
        await app.init();
    });

    it(`/GET cats`, () => {
        return request(app.getHttpServer())
            .get('animals/cats')
            .expect(200)
            .expect({
                data: catsService.findAll(),
            });
    });

    afterAll(async () => {
        await app.close();
    });
});