import { Request, Response, NextFunction } from 'express';
export declare class Clothes {
    _model: any;
    constructor(norm: any);
    getAllClothes(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getClothesById(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    createClothes(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
