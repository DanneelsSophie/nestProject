import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsProviders } from './dogs.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [DogsService, ...DogsProviders],
})
export class DogsModule {}