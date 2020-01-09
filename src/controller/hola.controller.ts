import { Request, Response } from 'express';

export default class HolaController {
    private static _instance: HolaController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    getAll = (req: Request, res: Response) => {
        res.json('HOLA MUNDO');
    }

}