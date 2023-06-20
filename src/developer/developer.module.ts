import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Developer } from "./entities/developer.entity"
import { DeveloperController } from "./developer.controller"
import { DeveloperService } from "./developer.service"


@Module({
  controllers: [DeveloperController],
  providers:[DeveloperService],
  imports:[ TypeOrmModule.forFeature([Developer])]
})
export class DeveloperModule {
  /*...*/ 
}