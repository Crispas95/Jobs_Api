import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception.fileter';
import { JobDTO } from './dto/jobs.dto';
import { Job } from './interfaces/jobs.interface';
import { JobsService } from './jobs.service';
 
@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService){}

    @Get(":id")
    //@UseFilters(HttpExceptionFilter)
   async findAll(@Param('id')id ):Promise<Job>{
        const record = await this.jobsService.find(id);
         if(!record){
            throw new  NotFoundException;
         } else{
            return record;
         }
    }

    @Post()
    async create(@Body() job: JobDTO): Promise<Job>{
        return this.jobsService.create(job);
    }

    @Put(':id')
    update(@Param('id') id, @Body() job: JobDTO): Promise<Job>{
        return this.jobsService.update(id,job);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Job>{
        return this.jobsService.create(id);
    }
}
 