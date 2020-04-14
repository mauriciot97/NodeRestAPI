import { Request, Response, NextFunction } from 'express';
export declare class Clothes {
    _model: any;
    constructor(norm: any);
    createClothes(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getAllClothes(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getClothesById(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    updateClothes(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    deleteClothes(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
