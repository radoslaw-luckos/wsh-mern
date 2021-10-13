import story from '../models/story.js';

// gets all the stories
export const getStories = async (req, res) => {
    try {
        const stories = await story.find();
        res.status(200).json(stories);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
// gets specific story
export const getStory = async (req, res) => {
    try {
        const storyToGet = await story.findById(req.params.storyId);
        res.status(200).json(storyToGet);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }

}
// deletes specific story
export const deleteStory = async (req, res) => {
    try {
        const storyToDelete = await story.findByIdAndDelete(req.params.storyId);
        res.status(200).json(storyToDelete);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
// updates specific story
export const updateStory = async (req, res) => {
    try {
        const storyToUpdate = await story.findById(req.params.storyId);
        Object.assign(storyToUpdate, req.body);
        storyToUpdate.save();
        res.status(200).json(storyToUpdate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//submits a story
export const createStory = async (req, res) => {
    try {
        const newStory = new story(req.body);
        await newStory.save();
        res.status(201).json(newStory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}