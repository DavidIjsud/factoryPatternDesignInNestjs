import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export interface CreateProduct{

         createConnectionConfig() : TypeOrmModuleOptions  ;    

}