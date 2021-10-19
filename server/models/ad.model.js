import mongoose from 'mongoose';

const adSchema = mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    deadline: {
        type: Date,
        default: Date.now
    }
})

const Ad = mongoose.model('Ad', adSchema);

export default Ad;