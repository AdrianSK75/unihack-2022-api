import express from 'express';
import { cretateUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users';
const usersRouter = express.Router();

usersRouter
    .get('/', getUsers)
    .get('/:userId', getUser)
    .post('/', cretateUser)
    .put('/:userId', updateUser)
    .delete('/:userId', deleteUser);

export default usersRouter;