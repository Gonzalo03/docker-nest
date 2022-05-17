import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'host.docker.internal',
            port: 3306,
            username: 'root',
            password: '',
            database: 'docker_nest',
            autoLoadEntities: true,
            synchronize: true,
          }),
    ]
})
export class DatabaseModule {}
