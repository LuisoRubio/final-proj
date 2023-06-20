import { IsNotEmpty, IsString } from "class-validator"

export class DeveloperDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsNotEmpty()
    @IsString()
    readonly body: string
}