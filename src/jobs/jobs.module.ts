import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import {MongooseModule} from '@nestjs/mongoose'
import { JobsService } from './jobs.service';
import { JobsSchema} from './schemas/job.schema';

@Module({
    imports:[MongooseModule.forFeature([{name: 'Job',schema:JobsSchema}])],
    controllers:[JobsController],
    providers:[JobsService]
})
export class JobsModule {}
