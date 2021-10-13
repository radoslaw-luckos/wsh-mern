import express from 'express';
import { getStories, getStory, createStory, updateStory, deleteStory } from '../controllers/stories.js';

const router = express.Router();

router.get('/', getStories);
router.get('/:storyId', getStory);
router.delete('/delete/:storyId', deleteStory)
router.patch('/update/:storyId', updateStory)
router.post('/', createStory);

export default router;