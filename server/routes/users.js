import express from 'express';
import { registerUser, getUsers, getUser, deleteUser, updateUser, loginUser } from '../controllers/users.js';
import { auth } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/register', auth, registerUser);
router.post('/login', loginUser);
router.get('/', auth, getUsers);
router.get('/:userId', auth, getUser);
router.delete('/delete/:userId', auth, deleteUser)
router.patch('/update/:userId', auth, updateUser)

export default router;