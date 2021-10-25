import React from 'react';
import './Login.scss';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>

            <h2 className="login-form__title">Zaloguj się</h2>

            <div className="login-form__input-group">
                <label htmlFor="email">Email</label>
                <input {...register("email")} />
            </div>
            <div className="login-form__input-group">
                <label htmlFor="password">Password</label>
                <input type='password' {...register("password", { required: true })} />
            </div>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}

export default Login;