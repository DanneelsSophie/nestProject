import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsProviders } from './cats.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [CatsService, ...CatsProviders],
})
export class CatsModule {}