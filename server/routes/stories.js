import express from 'express';
import { getStories, getStory, createStory, updateStory, deleteStory } from '../controllers/stories.js';
import { auth } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getStories);
router.get('/:storyId', getStory);
router.delete('/delete/:storyId', auth, deleteStory)
router.patch('/update/:storyId', auth, updateStory)
router.post('/', auth, createStory);

export default router;