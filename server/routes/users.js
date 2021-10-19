import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:userId', getUser);
router.delete('/delete/:userId', deleteUser)
router.patch('/update/:userId', updateUser)

export default router;