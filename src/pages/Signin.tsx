import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { SubmitHandler, useForm } from "react-hook-form"
import { userType } from '../types/userType';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<userType>();
    const onSubmit: SubmitHandler<userType> = async (data) => {
            const user=  await dispatch(login(data))
    }
    return (
        <div className="w-full flex flex-wrap">
            {/* Login Section */}
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                    <a href="#" className="bg-black text-white font-bold text-xl p-4">Logo</a>
                </div>
                <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p className="text-center text-3xl">Welcome.</p>
                    <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col pt-4">
                            <label htmlFor="username" className="text-lg">User Name</label>
                            <input {...register('username', { required: true })} type="text" id="username" placeholder="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.username && <label className='text-[14px] text-red-600'>(*) Không được để trống trường này</label>}
                        </div>
                        <div className="flex flex-col pt-4">
                            <label htmlFor="password" className="text-lg">Password</label>
                            <input {...register('password', { required: true })} type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.password && <label className='text-[14px] text-red-600'>(*)Không được để trống trường này</label>}
                        </div>
                        <input type="submit" defaultValue="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                    </form>
                    <div className="text-center pt-12 pb-12">
                        <p>Don't have an account? <a href="/signup" className="underline font-semibold">Register here.</a></p>
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <div className="w-1/2 shadow-2xl">
                <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
            </div>
        </div>

    )
}

export default Signin