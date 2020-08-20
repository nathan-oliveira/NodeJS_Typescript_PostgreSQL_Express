import { Request, Response, NextFunction } from 'express';
import ResponseClass from '@src/models/ResponseClass';
import { UserLevelDAO } from '@src/models/userLevel/UserLevelDAO';

export class UserLevelController {
    public list(app: any, req: Request, res: Response, next: NextFunction) : void {
        const resp = new ResponseClass();

        UserLevelDAO.getAll(function(err: any, result: any) {
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