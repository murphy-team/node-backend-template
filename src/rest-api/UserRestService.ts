// import {UserSearcherDTO} from "mks-appenco-domain/dist";
// import {UserBS} from "../bs/UserBS";
// import {ServicesRouteConstants} from "../constants/ServicesRouteConstants";
// import {HttpConstants, JsonSerializationBS} from "mks-standard-infraestructure/dist";
import {ServicesRouteConstants} from "../constants/ServicesRouteConstants";
import {SomeDTO} from "../domain/SomeDTO";
import {DbConnectionBS} from "../bs/DbConnectionBS";
import {MongoDBConfigurationDTO} from "../domain/MongoDBConfigurationDTO";
import * as express from "express";
import {Db} from "mongodb"
import {CollectionIndexCreator} from "../dao/CollectionIndexCreator";

export class UserRestService {
    private _app: express.Router;

    public constructor(app: express.Router) {
        this._app = app;
        this.initializeUserServiceRoutes();
    }

    public initializeUserServiceRoutes() {
        this.searchUserById();
    }

    private async searchUserById() {

        let connectionReference: any;

        this._app.get(ServicesRouteConstants.TEST_SERVICE, async function (req: express.Request, res: express.Response) {
            try {

                // let mongoDbDTO: MongoDBConfigurationDTO = new MongoDBConfigurationDTO();
                // mongoDbDTO.clientReference = "localhost";
                // mongoDbDTO.port = "27017";
                // mongoDbDTO.databaseName = "testDB";
                // let connection = await DbConnectionBS.getConnection(mongoDbDTO);

                let some_dto = new SomeDTO();

                some_dto._id = "01";
                some_dto._item = "thing";
                res.status(200).send(JSON.stringify(some_dto));

            } catch (Exception) {
                console.log("Exception", Exception);
                res.status(500).send(Exception);
            }
        });
    }
}