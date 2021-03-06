import {MongoDBConfigurationDTO} from "../domain/MongoDBConfigurationDTO";
import {MongoDBConnectionPoolDAO} from "../dao/MongoDBConnectionPoolDAO";
import {Db} from "mongodb";

export class DbConnectionBS {

    public constructor() {

    }

    public static async getConnection(connectionConfiguration: MongoDBConfigurationDTO): Promise<any> {

        try {
            let daoInstace = await MongoDBConnectionPoolDAO.getInstance(connectionConfiguration);
            return new Promise<Db>(resolve => {
                resolve(daoInstace.getConnectionPool())
            });

        } catch (Exception) {
            throw new Exception;
        }
    }

    public static closeConnection(connectionReference: any) {
        if (connectionReference) {
            connectionReference.close();
        }
    }
}