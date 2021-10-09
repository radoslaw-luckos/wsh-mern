import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
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

const Post = mongoose.model('Post', postSchema);

export default Post;