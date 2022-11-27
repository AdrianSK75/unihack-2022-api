import { Response } from "express"

export const getRecognition = (req: Request, res: Response) => {
    res.send("Bunny recognised in this picture (94.78345%)");
};

export const postRecognition = (req: Request, res: Response) => {
    res.send("Bunny recognised in this picture (94.78345%)");
};