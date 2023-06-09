import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { CreateUser } from '../../Utils/ReduxToolkit/AuthSlice/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const { errorMessage, isError, reset } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        // console.log(data)
        dispatch(CreateUser({ email: data.email, password: data.password }))
            .then(
                navigate('/gallery')
            )
        reset()
    }
    return (
        <div className='h-[500px] flex flex-col justify-center items-center'>
            <h2 className='text-4xl'>SignUp</h2>
            {isError ? <p className='text-red-500 my-2'>{errorMessage}</p> : ''}
            <div className='w-96'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"{...register("email")} placeholder="Your Email" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"{...register("password")} placeholder="Your Password" className="input input-bordered w-full" />
                    </div>

                    <button type="submit" className='btn btn-accent w-full my-2' >Submit</button>
                </form>
            </div>
            <p>Already Have an account? <Link to='/login' className='text-secondary'>Login Now.</Link></p>

        </div>
    );
};

export default Signup;