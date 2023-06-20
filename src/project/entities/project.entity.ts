// project.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm'
import { Developer } from '../../developer/entities/developer.entity'

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  body: string

  @ManyToMany(() => Developer, (dev) => dev.projects)
  dev: Developer
}
