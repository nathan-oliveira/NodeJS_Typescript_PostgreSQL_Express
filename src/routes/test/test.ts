import { Request, Response, NextFunction } from 'express'
import { TestController } from '../../controllers/test/testController'


export class Test {
    public testController: TestController = new TestController();

    public routes(app): void {
        app.get('/test', (req: Request, res: Response, next: NextFunction) => {
            this.testController.list(app, req, res, next)
        })
    }
}