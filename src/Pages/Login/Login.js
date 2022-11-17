import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    //using react-hook-form
    const { register, formState: {errors}, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const handelLogin = data =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err => {
            console.error(err.message);
            setLoginError(err.message);
        });
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handelLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                        {...register("email", {
                            required: "Email is required",
                            
                        })}
                        className="input input-bordered w-full max-w-xs" 
                        />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  
                        {...register("password", { 
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 character or longer' },
                        })}  
                            className="input input-bordered w-full max-w-xs"
                            />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget password?</span>
                        </label>
                    </div>
                    
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal? <Link to ="/signup" className='text-primary'>Create new account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;