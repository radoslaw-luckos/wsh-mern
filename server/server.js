//needed imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import { PORT, CONNECTION_URL } from './utils/globalVariables.js'

//express server
const app = express();
dotenv.config();

const corsOptions = {
    origin: "https://32wsh.netlify.app"
};

app.use(express.json());
app.use(cors(corsOptions));

//routes import
import storiesRoutes from './routes/stories.js';
import adsRoutes from './routes/ads.js';
import usersRoutes from './routes/users.js';
import emailRoutes from './routes/email.js';

//greeting route
app.get('/', (req, res) => {
    res.send('Hello to 32WSH API');
})

//routes middlewares
app.use('/api/stories', storiesRoutes);
app.use('/api/ads', adsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/email', emailRoutes);


//mongoDB connection
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
    .catch(err => console.log(err.message))