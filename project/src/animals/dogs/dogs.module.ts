import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { DogsProviders } from './dogs.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [DogsController],
    providers: [DogsService, ...DogsProviders],
})
export class DogsModule {}