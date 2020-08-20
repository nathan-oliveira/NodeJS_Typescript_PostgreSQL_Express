import { Request, Response, NextFunction } from 'express'
import { UserLevelController } from '@src/controllers/userLevel/UserLevelController'

export class UserLevel {
    public userLevelController: UserLevelController = new UserLevelController();

    public routes(app: any): void {
        app.get('/nivelUsuario', (req: Request, res: Response, next: NextFunction) => {
            this.userLevelController.list(app, req, res, next)
        })
    }
}
