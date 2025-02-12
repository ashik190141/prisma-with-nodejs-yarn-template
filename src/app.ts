import express, { Application, Request, Response } from "express";
import cors from 'cors'

const app: Application = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req:Request, res:Response) => {
    res.send("The app is running successfully")
})

// app.use("/api/v1", route name);

export default app;