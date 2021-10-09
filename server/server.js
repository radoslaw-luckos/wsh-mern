//needed imports
import express from 'express';
import mongoose from 'mongoose';

//express server
const app = express();

app.use(express.json());

//routes import
import postsRoutes from './routes/posts.js';

app.use('/posts', postsRoutes);

//global variables
const CONNECTION_URL = 'mongodb+srv://Radek:qwe456rty@cluster0.7vlwu.mongodb.net/32wshDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//mongoDB connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log(err.message))