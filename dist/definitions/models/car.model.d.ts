import { Request, Response, NextFunction } from 'express';
export declare class Car {
    _model: any;
    constructor(norm: any);
    getAllCars(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getCarById(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    createCar(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    updateCar(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    deleteCar(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
