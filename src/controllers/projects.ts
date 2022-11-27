import { Request, Response } from "express"

export const getProjects = (req: Request, res: Response) => {
    res.send('Sent a list of projects');
}

export const getProject = (req: Request, res: Response) => {
    const projectId = req.params.projectId;
    res.send(`Sent business with id ${projectId}`);
}

export const createProject = (req: Request, res: Response) => {
    res.send('Created new project');
}

export const updateProject = (req: Request, res: Response) => {
    const projectId = req.params.projectId;
    res.send(`Updated business with id ${projectId}`);
}

export const deleteProject = (req: Request, res: Response) => {
    const projectId = req.params.projectId;
    res.send(`Deleted business with id ${projectId}`);
}