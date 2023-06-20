import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Role } from './role.entity'
import { Developer } from 'src/developer/entities/developer.entity'
import { Project } from 'src/project/entities/project.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user: string

  @Column()
  password: string

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role

  @ManyToMany(() => Project, (project) => project.dev)
  projects: Project[]

  @OneToOne(() => Developer, (dev) => dev.user)
  developers: Developer
}
