import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    tag: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Story = mongoose.model('Story', storySchema);

export default Story;