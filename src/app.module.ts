import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { DeveloperModule } from './developer/developer.module'
import { Developer } from './developer/entities/developer.entity'
import { Project } from './project/entities/project.entity'

import { User } from './users/entities/user.entity'
import { ProjectModule } from './project/project.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: '1234',
      port: 5432,
      database: 'projdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Developer, Project]),
    UsersModule,
    DeveloperModule,
    ProjectModule,
  ],
})
export class AppModule {}
