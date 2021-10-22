import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    unit: {
        type: String,
    },
    functions: {
        type: Array,
    },
    phone: {
        type: Number,
    },
})

const User = mongoose.model('User', userSchema);

export default User;