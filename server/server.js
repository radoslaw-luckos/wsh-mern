//needed stuff import
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//routes import
import postsRoutes from './routes/posts.js';

//express server
const app = express();

app.use('/posts', postsRoutes);
app.use(bodyParser.json());
app.use(cors());

//global variables
const CONNECTION_URL = 'mongodb+srv://Radek:qwe456rty@cluster0.7vlwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//mongoDB connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log(err.message))