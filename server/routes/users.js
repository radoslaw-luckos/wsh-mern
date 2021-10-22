import express from 'express';
import { registerUser, getUsers, getUser, deleteUser, updateUser, loginUser } from '../controllers/users.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getUsers);
router.get('/:userId', getUser);
router.delete('/delete/:userId', deleteUser)
router.patch('/update/:userId', updateUser)

export default router;