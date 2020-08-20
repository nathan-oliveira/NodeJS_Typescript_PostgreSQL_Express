import { Request, Response, NextFunction } from 'express';

import ResponseClass from '@src/models/ResponseClass';
import { Controller } from '@src/util/Controller';
import { UserLevelDAO } from '@src/models/userLevel/UserLevelDAO';


export class UserLevelController implements Controller {
    public list(app: any, req: Request, res: Response, next: NextFunction) : void {
        const resp = new ResponseClass();
        let status: number;

        UserLevelDAO.getAll(function(err: any, result: any) {
            if(err) {
                resp.error = true;
                resp.msg = 'Ocorreu um erro!';
                status = 401;
            } else {
                resp.dados = result.rows;
                status = 201;
            }

            res.status(status).json(resp);
        })
    }
}