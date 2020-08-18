import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import * as bp from 'body-parser';
import cors from 'cors';

// Routes
import { Index as IndexRouter } from '@src/routes/index'
import { Test as TestRouter } from '@src/routes/test/test'

// import * as consign from 'consign';

class App {
    public app: express.Application
    public indexRouter: IndexRouter = new IndexRouter()
    public testRouter: TestRouter = new TestRouter()

    constructor() {
        this.app = express();
        this.cors();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.app.use(bp.urlencoded({ extended: true }))
        this.app.use(bp.json({ limit: '20mb' }))
        this.app.use(express.static('public'))
    }

    private routes(): void {
        this.indexRouter.routes(this.app);
        this.testRouter.routes(this.app);
    }

    private cors(): void {
        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: 'http://localhost:4000',
            preflightContinue: false
        };

        this.app.use(cors(options))
        this.app.options("*", cors(options))
    }
}

export default new App().app;
