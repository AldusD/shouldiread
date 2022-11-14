import express, { json, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connection from "./database/db.js";

import booksRouter from './routes/books-routes.js';

dotenv.config();
const app = express();

app.use(json(), cors());

app.use(booksRouter);
app.get("/test", (_, res: Response) => {
    res.status(200).send("Its showtime");
})

app.listen(process.env.PORT, () => {
    console.log("Chess happens on", process.env.PORT);
})