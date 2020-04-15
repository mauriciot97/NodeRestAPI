import { Request, Response, NextFunction } from 'express';
export declare class Phone {
    _model: any;
    constructor(norm: any);
    getAllPhones(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getPhoneById(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    createPhone(model: any): (req: Request<import("../../../../../../Users/Mauricio/Desktop/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
