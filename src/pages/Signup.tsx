import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { signup } from '../api/authApi';
import { userType } from '../types/userType';
const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<userType>();
    const [err, setErr] = useState<string>("")
    const onSubmit: SubmitHandler<userType> = async (data) => {
        console.log(data);
        if (data.password !== data.confirmpassword) {
            setErr("Mật khẩu không khớp")
        } else {
            setErr("")
            const {username , email , password} = data;
            const user = await signup({username,email,password})
        }
    }
    return (
        <div className="w-full flex flex-wrap">
            {/* Register Section */}
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                    <a href="#" className="bg-black text-white font-bold text-xl p-4">Logo</a>
                </div>
                <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p className="text-center text-3xl">Join Us.</p>
                    <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col pt-4">
                            <label htmlFor="name" className="text-lg">User Name</label>
                            <input {...register('username', { required: true })} type="text" id="name" placeholder="John Smith" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.username && <label className='text-[14px] text-red-600'>(*) Không được để trống trường này</label>}
                        </div>
                        <div className="flex flex-col pt-4">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input {...register('email', { required: true })} type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.email && <label className='text-[14px] text-red-600'>(*) Không được để trống trường này</label>}
                        </div>
                        <div className="flex flex-col pt-4">
                            <label htmlFor="password" className="text-lg">Password</label>
                            <input {...register('password', { required: true })} type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.password && <label className='text-[14px] text-red-600'>(*) Không được để trống trường này</label>}
                        </div>
                        <div className="flex flex-col pt-4">
                            <label htmlFor="confirm-password" className="text-lg">Confirm Password</label>
                            <input {...register('confirmpassword', { required: true })} type="password" id="confirm-password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            {errors.confirmpassword && <label className='text-[14px] text-red-600'>(*)Không để trống trường này</label>}
                            {err && <label className='text-[14px] text-red-600'>{err}</label>}
                        </div>
                        <input type="submit" defaultValue="Register" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                    </form>
                    <div className="text-center pt-12 pb-12">
                        <p>Already have an account? <a href="/signin" className="underline font-semibold">Log in here.</a></p>
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <div className="w-1/2 shadow-2xl">
                <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
            </div>
        </div>

    )
}

export default Signup