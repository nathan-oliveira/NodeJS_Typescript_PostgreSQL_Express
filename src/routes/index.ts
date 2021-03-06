import { Request, Response, NextFunction } from 'express';
import { IndexController } from '@src/controllers/indexController';

export class Index {
    public indexController: IndexController = new IndexController();
    
    public routes(app: any): void {
        app.get('/', (req: Request, res: Response, next: NextFunction) => {
            this.indexController.list(app, req, res, next);
        })
    }
}
 