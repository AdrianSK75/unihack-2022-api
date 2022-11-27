import express from "express";
import { getRecognition } from "../controllers/ai.controller";
const AiRouter = express.Router();

AiRouter
    .get('/ai/recognise', () => {

    })
    .post('/ai/recognise', () => {

    });

export default AiRouter;