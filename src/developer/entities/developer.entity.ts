// developer.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Project } from '../../project/entities/project.entity';

@Entity()
export class Developer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @OneToOne(() => User, user => user.developers)
  user: User;

  @ManyToMany(() => Project, project => project.dev)
  projects: Project[];
}