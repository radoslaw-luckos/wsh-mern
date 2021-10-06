import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    date: {
        type: Date,
        default: new Date()
    },
    desc: String,
    tag: String
})

const Post = mongoose.model('Post', postSchema);

export default Post;