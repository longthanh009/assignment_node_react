import React from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form"
import { categoryType } from '../../../types/categoryType'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {addCategory} from "../../../features/category/categorySlice"

const CreatCategory = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState } = useForm<categoryType>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<categoryType> = data => {
        dispatch(addCategory(data))
        alert("Thêm thành công")
        navigate("/admin/categorys");
    }
    return (
        <div>
            <div className='flex justify-between mb-[20px]'>
                <h1 className='text-[30px]'>View Categorys / Created</h1>
            </div>
            <form className="justify-center w-full mx-auto" method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="Email" className="block mb-3 text-sm font-semibold text-gray-500">Name Category</label>
                            <input  {...register('name',{required:true})} type="text" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <Link to="/admin/categorys" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Cancel
                        </Link>
                        <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Created</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default CreatCategory