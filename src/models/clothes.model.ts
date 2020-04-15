import { Request, Response, NextFunction } from 'express';

export class Clothes {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            brand: { type: String, maxlength: 24 },
            size: { type: String, maxlength: 24 },
            gender: { type: String, maxlength: 24 },
            color: { type: String, maxlength: 24 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store user clothes model',
        [
            {
                route: '/get-all-clothes',
                method: 'GET',
                callback: this.getAllClothes,
                requireToken: true,
            },
            {
                route: '/get-clothes-by-id/:id',
                method: 'GET',
                callback: this.getClothesById,
                requireToken: true,
            },
            {
                route: '/create-clothes',
                method: 'POST',
                callback: this.createClothes,
                requireToken: true,
            },
            {
                route: '/update-clothes/id/:id',
                method: 'PUT',
                callback: this.updateClothes,
                requireToken: true,
              },

        ]
        ];
    }

    getAllClothes(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let clothesCtrl = model.controller;
            let resp = await clothesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getClothesById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            }
            let clothesCtrl = model.controller;
            let resp = await clothesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    createClothes(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let clothesCtrl = model.controller;
            let resp = await clothesCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    updateClothes(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          let clothesCtrl = model.controller;
          let resp = await clothesCtrl.update(req, null, null);
          res.json({ message: 'Success', resp });
        }
      }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}