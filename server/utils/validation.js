import Joi from 'joi';


export const validateRegister = (data) => {

    const registerSchema = Joi.object({
        name: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        unit: Joi.string().required(),
        functions: Joi.array().required(),
        phone: Joi.number().required()
    });

    return registerSchema.validate(data)

}
export const validateLogin = (data) => {

    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    });

    return loginSchema.validate(data)

}
