// developer.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Private, Public } from 'src/users/current.meta';
import { Role } from 'src/users/entities/role.entity';
import {Project} from './entities/project.entity'
import { ProjectDto } from './dto/project.dto';
 
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @Private(Role.ADMIN)
  async findAll(): Promise<Project[]> {
    return await this.projectService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string): Promise<Project> {
    return this.projectService.findOne(+id);
  }

  @Post()
  @Private(Role.ADMIN)
  create(@Body() developer: ProjectDto): Promise<Project> {
    return this.projectService.create(developer);
  }

  @Put(':id')
  @Private(Role.ADMIN)
  update(@Param('id') id: string, @Body() developer: ProjectDto): Promise<Project> {
    return this.projectService.update(+id, developer);
  }

  @Delete(':id')
  @Private(Role.ADMIN)
  delete(@Param('id') id: string): Promise<void> {
    return this.projectService.delete(+id);
  }
}
