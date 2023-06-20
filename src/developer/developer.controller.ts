// developer.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import {Private, Public} from '../users/current.meta'
import { Developer as DeveloperEntity} from './entities/developer.entity';
import { Role } from 'src/users/entities/role.entity';
import { DeveloperDto } from './dto/developer.dto';



@Controller('developers')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}
  
  @Get()
  @Public()
  findAll(): Promise<DeveloperEntity[]> {
    return this.developerService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string): Promise<DeveloperEntity> {
    return this.developerService.findOne(+id);
  }

  @Post()
  @Private(Role.ADMIN)
  create(@Body() developer: DeveloperDto): Promise<DeveloperEntity> {
    return this.developerService.create(developer);
  }

  @Put(':id')
  @Private(Role.ADMIN)
  update(@Param('id') id: string, @Body() developer: DeveloperDto): Promise<DeveloperEntity> {
    return this.developerService.update(+id, developer);
  }

  @Delete(':id')
  @Private(Role.ADMIN)
  delete(@Param('id') id: string): Promise<void> {
    return this.developerService.delete(+id);
  }
}
