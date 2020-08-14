import { Request, Response, NextFunction } from 'express';
import ResponseClass from '../../models/ResponseClass';

import { TestDAO } from '../../models/test/TestDAO';

export class TestController {
    public list(app: any, req: Request, res: Response, next: NextFunction) {
        let resp = new ResponseClass();

        TestDAO.getAll(function(err: any, result: any) {
            if(err) {
                resp.error = true;
                resp.msg = 'Ocorreu um erro!';
            } else {
                resp.dados = result.rows;
            }
    
            res.json(resp);
        })
    }
}