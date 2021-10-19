import user from '../models/user.model.js';

// gets all the users
export const getUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
// gets specific user
export const getUser = async (req, res) => {
    try {
        const userToGet = await user.findById(req.params.userId);
        res.status(200).json(userToGet);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }

}
// deletes specific user
export const deleteUser = async (req, res) => {
    try {
        const userToDelete = await user.findByIdAndDelete(req.params.userId);
        res.status(200).json(userToDelete);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
// updates specific user
export const updateUser = async (req, res) => {
    try {
        const userToUpdate = await user.findById(req.params.userId);
        Object.assign(userToUpdate, req.body);
        userToUpdate.save();
        res.status(200).json(userToUpdate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//submits a user
export const createUser = async (req, res) => {
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}