import {IsString,IsInt} from 'class-validator'
export class JobDTO{
   // readonly id?: string;
    @IsString()
    readonly title : string;

    @IsInt()
    readonly salary: number;
}