import user from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { validateLogin, validateRegister } from '../utils/validation.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../utils/globalVariables.js';

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
//registers new user
export const registerUser = async (req, res) => {

    const { error } = validateRegister(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const emailExists = await user.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).json('Email already exists in the database!');

    const newUser = new user({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        unit: req.body.unit,
        functions: req.body.functions,
        phone: req.body.phone
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save()
                .then(user => res.status(201).json(user))
                .catch(err => console.log(err))
        });
    });
}
//login user
export const loginUser = async (req, res) => {

    const { error } = validateLogin(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const userToCheck = await user.findOne({ email: req.body.email });
    if (!userToCheck) return res.status(400).json('Email is not found!');


    const validPassword = await bcrypt.compare(req.body.password, userToCheck.password);
    console.log(validPassword);

    if (!validPassword) return res.status(400).json('Invalid password!');

    const token = jwt.sign({ _id: userToCheck._id }, TOKEN_SECRET)
    res.header('auth-token', token);

    const response = {
        token: token,
        username: userToCheck.name,
        userId: userToCheck._id
    }
    res.json(response)
}