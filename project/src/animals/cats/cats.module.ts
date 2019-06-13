import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsProviders } from './cats.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CatsController],
    providers: [CatsService, ...CatsProviders],
})
export class CatsModule {}