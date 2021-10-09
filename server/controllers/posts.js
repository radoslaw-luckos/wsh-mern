import Post from '../models/post.js';


export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}
export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new Post(post)

    try {
        await newPost.save();
        console.log(post);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}