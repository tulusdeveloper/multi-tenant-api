import { Router } from 'express';
import { getUsers } from './userController';

const router = Router();

router.get('/', getUsers);

export default router;
