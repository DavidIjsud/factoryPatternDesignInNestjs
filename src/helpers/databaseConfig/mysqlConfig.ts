import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CreateProduct } from "../interfaces/create.product.interface";

export class MysqlConnectionConfig implements CreateProduct{
    
    createConnectionConfig():  TypeOrmModuleOptions  {
    
            return {
                 host : "localhost",
                 database : "prueba",
                 password : "",
                 port : 3306,
                 synchronize : false,
                 type : "mysql",
                 username  : "root",
                 entities : ["dist/**/*.entity{.ts,.js}"]  
            }

    }
}