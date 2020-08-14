// 'use strict'
import { Request, Response, NextFunction } from 'express';

import { IndexController } from '../controllers/indexController';

export class Index {
    public indexController: IndexController = new IndexController();
    
    public routes(app): void {
        app.get('/', (req: Request, res: Response, next: NextFunction) => {
            this.indexController.listar(app, req, res, next);
        })
    }
}
 