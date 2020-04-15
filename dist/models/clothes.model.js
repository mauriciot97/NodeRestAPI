"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Clothes {
    constructor(norm) {
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
    getAllClothes(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let clothesCtrl = model.controller;
            let resp = yield clothesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getClothesById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let clothesCtrl = model.controller;
            let resp = yield clothesCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createClothes(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let clothesCtrl = model.controller;
            let resp = yield clothesCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateClothes(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let clothesCtrl = model.controller;
            let resp = yield clothesCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Clothes = Clothes;
