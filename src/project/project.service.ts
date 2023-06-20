// project.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../project/entities/project.entity';
import { ProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: number): Promise<Project> {
    const developer = await this.projectRepository.findOneBy({id}) 

    if (!developer) {
      throw new NotFoundException("No se encontró este comentario")
    }

    return developer;
  }

  async create(developer: ProjectDto): Promise<Project> {
    return await this.projectRepository.save(developer);
  }

  async update(id: number, project: ProjectDto): Promise<Project> {
    const projectToUpdate = await this.findOne(id);
    projectToUpdate.body = project.body;
    return await this.projectRepository.save(projectToUpdate);
  }

  async delete(id: number): Promise<void> {
    const project = await this.findOne(id)

    await this.projectRepository.delete(project)
  }
}
