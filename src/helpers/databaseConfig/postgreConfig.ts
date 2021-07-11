import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CreateProduct } from "../interfaces/create.product.interface";

export class PosgretConnectionConfig implements CreateProduct{
    
    createConnectionConfig():  TypeOrmModuleOptions  {
    
            return {
                 host : "ec2-3-226-134-153.compute-1.amazonaws.com",
                 database : "d3h3r1spj4bgja",
                 password : "c53bc1be99d5b2edf8a9042f1bbed7915d27c1ec181a6ccd9de965fcc3bcb461",
                 port : 5432,
                 synchronize : false,
                 type : "postgres",
                 username  : "ixmxaagjawkuil",
                 entities  : ["dist/**/*.entity{.ts,.js}"],
                 ssl : {
                     rejectUnauthorized : false
                 }  
            }

    }
}