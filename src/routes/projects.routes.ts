import express from 'express';
import { createProject, deleteProject, getProject, getProjects, updateProject } from '../controllers/projects';
const projectsRouter = express.Router();

projectsRouter
    .get('/', getProjects)
    .get('/:projectId', getProject)
    .post('/', createProject)
    .put('/:projectId', updateProject)
    .delete('/:projectId', deleteProject);

export default projectsRouter;