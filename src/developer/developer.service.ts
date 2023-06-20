// developer.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from './entities/developer.entity';
import { DeveloperDto } from './dto/developer.dto';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectRepository(Developer)
    private readonly developerRepository: Repository<Developer>,
  ) {}

  async findAll(): Promise<Developer[]> {
    return await this.developerRepository.find();
  }

  async findOne(id: number): Promise<Developer> {
    const developer = await this.developerRepository.findOneBy({id}) 

    if (!developer) {
      throw new NotFoundException("No se encontró este developer")
    }

    return developer;
  }

  async create(developer: DeveloperDto): Promise<Developer> {
    return await this.developerRepository.save(developer);
  }

  async update(id: number, developer: DeveloperDto): Promise<Developer> {
    const developerToUpdate = await this.findOne(id);
    developerToUpdate.title = developer.title;
    developerToUpdate.body = developer.body;
    return await this.developerRepository.save(developerToUpdate);
  }

  async delete(id: number): Promise<void> {
    const developer = await this.findOne(id)

    await this.developerRepository.delete(developer)
  }
}