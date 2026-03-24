import express from 'express';
import authRouter from './routes/auth.routes.js';
import handleError from './middlewares/error.middleware.js';


const app = express();

app.use(express.json())

app.use("/api/auth", authRouter)


/* We must use handleError middleware at last of the app.js */
app.use(handleError)


export default app;