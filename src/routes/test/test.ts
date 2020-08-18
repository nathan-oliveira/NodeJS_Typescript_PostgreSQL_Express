import { Request, Response, NextFunction } from 'express'
import { TestController } from '@src/controllers/test/testController'


export class Test {
    public testController: TestController = new TestController();

    public routes(app: any): void {
        app.get('/test', (req: Request, res: Response, next: NextFunction) => {
            this.testController.list(app, req, res, next)
        })
    }
}
