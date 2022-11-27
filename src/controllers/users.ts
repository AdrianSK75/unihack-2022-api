import { Request, Response } from "express"

export const getUsers = (req: Request, res: Response) => {
    res.send("Sent a list of users")
}

export const getUser = (req: Request, res: Response) => {
    const userId = req.params.userId;
    res.send(`Sent user with id ${userId}`);
}

export const cretateUser = (req: Request, res: Response) => {
    res.send('Created new user');
}

export const updateUser = (req: Request, res: Response) => {
    const userId = req.params.userId;
    res.send(`Updated user with id ${userId}`);
}

export const deleteUser = (req: Request, res: Response) => {
    const userId = req.params.userId;
    res.send(`Updated user with id ${userId}`);
}