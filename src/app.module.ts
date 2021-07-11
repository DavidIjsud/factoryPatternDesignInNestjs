import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseType } from './helpers/enums/database.enum';
import { DBFactory } from './helpers/factories/dbfactories';

@Module({
  imports: [ TypeOrmModule.forRoot( 

    DBFactory.createConfigDatabase(DatabaseType.Oracle).createConnectionConfig()


   )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
