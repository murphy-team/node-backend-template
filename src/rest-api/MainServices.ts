import {UserRestService} from "./UserRestService";
import * as express from "express";

export class MainServices {

    public constructor(applicationRouter: express.Router) {
        new UserRestService(applicationRouter);
    }
}