import express from "express";
import { getRecognition, postRecognition } from "../controllers/ai.controller";
const AiRouter = express.Router();

AiRouter
    .get('/recognise', getRecognition)
    .post('/recognise', postRecognition);

export default AiRouter;