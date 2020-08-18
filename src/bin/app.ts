import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import * as bp from 'body-parser';

// Routes
import { Index as IndexRouter } from '@src/routes/index'
import { Test as TestRouter } from '@src/routes/test/test'

// import * as cors from 'cors';
// import * as consign from 'consign';
// consign({extensions: ['.ts']})
// import {}

class App {
    public app: express.Application
    public indexRouter: IndexRouter = new IndexRouter()
    public testRouter: TestRouter = new TestRouter()

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        // this.app.use(cors());
        this.app.use(bp.urlencoded({ extended: true }))
        this.app.use(bp.json({ limit: '20mb' }))
        this.app.use(express.static('public'))
    }
    
    private routes(): void {
        this.indexRouter.routes(this.app);
        this.testRouter.routes(this.app);
    }
}

export default new App().app;