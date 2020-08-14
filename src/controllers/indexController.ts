import { Request, Response, NextFunction } from 'express';
import ResponseClass from '../models/ResponseClass';

export class IndexController {

    public listar(app: any, req: Request, res: Response, next: NextFunction) {
        let resp = new ResponseClass();
        try {
            resp.msg = 'API FUNCIONANDO.';
            resp.dados = [ 
                { id: 1, name: 'Nathan Oliveira'}
            ];
    
            res.json(resp);
        } catch (error) {
            resp.error = true;
            resp.msg = 'Ocorreu um erro!'
    
            res.json(resp);
        }
    }

}