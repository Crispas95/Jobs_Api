import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from './jobs/jobs.controller';
import { JobsService } from './jobs/jobs.service';
import { JobsModule } from './jobs/jobs.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [JobsModule,
  MongooseModule.forRoot('mongodb://localhost/jobs')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
