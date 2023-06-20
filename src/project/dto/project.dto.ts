import { IsNotEmpty, IsString } from "class-validator";

export class ProjectDto {

    @IsNotEmpty()
    @IsString()
    readonly body: string
    
}