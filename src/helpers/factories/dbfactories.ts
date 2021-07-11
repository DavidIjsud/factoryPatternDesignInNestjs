import { MysqlConnectionConfig } from "../databaseConfig/mysqlConfig";
import { PosgretConnectionConfig } from "../databaseConfig/postgreConfig";
import { DatabaseType } from "../enums/database.enum";
import { CreateProduct } from "../interfaces/create.product.interface";

export class DBFactory{


    public static createConfigDatabase(  typeDatabase : DatabaseType  ) : CreateProduct {

               switch ( typeDatabase ) {
                   case  DatabaseType.MySql :
                   
                    return new MysqlConnectionConfig();

                       break;
                   
                   case DatabaseType.Oracle:
                   
                      return new PosgretConnectionConfig();

                       break;
                       
                   default:

                    return new MysqlConnectionConfig();

                       break;
               }     

    }

    

}