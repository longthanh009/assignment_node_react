import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { productType } from '../../../types/productType';
import { read } from '../../../api/productApi';
import { updateProduct } from '../../../features/product/productSlice';
import { categoryType } from '../../../types/categoryType';
import { list } from '../../../api/categoryApi';

const UpdateProduct = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<productType>();
    const navigate = useNavigate();
    const { id } = useParams();
    const [categorys, setCategorys] = useState<categoryType[]>([])
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);
    useEffect(() => {
        const getCategorys = async () => {
            const { data } = await list();
            setCategorys(data)
        }
        getCategorys();
    }, []);
    const onSubmit: SubmitHandler<productType> = data => {
        dispatch(updateProduct(data))
        alert("Update thành công")
        navigate("/admin/products");
    }
    return (
        <div>
            <div className='flex justify-between mb-[20px]'>
                <h1 className='text-[30px]'>View Products / Updated</h1>
            </div>
            <form className="justify-center w-full mx-auto" method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <div className="mt-4">
                        <div className="w-full mb-[10px]">
                            <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Product Name</label>
                            <input  {...register('name', { required: true })} type="text" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full  mb-[10px]">
                            <label htmlFor="Price" className="block mb-3 text-sm font-semibold text-gray-500">Price</label>
                            <input  {...register('price', { required: true })} type="text" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full  mb-[10px]">
                            <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Image</label>
                            <input  {...register('img', { required: true })} type="text" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full  mb-[10px]">
                            <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Category</label>
                            <select {...register('category',{required: true})} className="w-full border bg-white rounded px-3 py-2 outline-none">
                                <option className="py-1">Categorys</option>
                                {categorys && categorys.map((item, index) => {
                                    return <option key={index} className="py-1" value={item._id}>{item.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="w-full  mb-[10px]">
                            <label htmlFor="Quantity" className="block mb-3 text-sm font-semibold text-gray-500">Quantity</label>
                            <input  {...register('quantity', { required: true })} type="number" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full  mb-[10px]">
                            <label htmlFor="Description" className="block mb-3 text-sm font-semibold text-gray-500">Description</label>
                            <textarea rows={20} {...register('description', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <Link to="/admin/products" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Cancel
                        </Link>
                        <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct