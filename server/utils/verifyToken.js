import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from './globalVariables.js';

export const auth = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json('Invalid Token')
    }
}