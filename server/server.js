//needed imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, CONNECTION_URL } from './utils/globalVariables.js'

//express server
const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(express.json());
app.use(cors(corsOptions));

//routes import
import storiesRoutes from './routes/stories.js';
import adsRoutes from './routes/ads.js';
import usersRoutes from './routes/users.js';

//routes middlewares
app.use('/api/stories', storiesRoutes);
app.use('/api/ads', adsRoutes);
app.use('/api/users', usersRoutes);


//mongoDB connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log(err.message))