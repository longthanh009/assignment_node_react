import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { productType } from '../../../types/productType';
import { createProduct } from '../../../features/product/productSlice';
import { categoryType } from '../../../types/categoryType';
import { list } from '../../../api/categoryApi';
import axios from 'axios';
import { create } from '../../../api/fileApi';

const CreatProduct = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState } = useForm<productType>();
    const navigate = useNavigate();
    const [categorys, setCategorys] = useState<categoryType[]>([])
    const [files, setFiles] = useState<any>([]);
    const CLOUDINARY_PRESET = "ha9jmrbt";
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/df4kjrav4/image/upload"
    const onSubmit: SubmitHandler<productType> = async (data) => {
        const formData = new FormData();
        if (files) {
            let countFile = []
            for (let index = 0; index < files.length; index++) {
                formData.append("file", files[index]);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                const image = await axios.post(CLOUDINARY_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                countFile.push(image.data.url)
            }
            const product = await dispatch(createProduct({...data,img: countFile[0]}));
            const { _id } = product.payload;
            for (let index = 0; index < countFile.length; index++) {
                const { data } = await create({
                    name: countFile[index],
                    productId: _id
                });
                console.log(data);
            }
            alert("Thêm thành công ");
            navigate("/admin/products");
        }
    }
    const previewImg = (ig: any) => {
        let imgs = [];
        for (let i = 0; i < ig.length; i++) {
            imgs.push(ig[i])
        }
        setFiles(imgs)
    }
    useEffect(() => {
        const getCategorys = async () => {
            const { data } = await list();
            setCategorys(data)
        }
        getCategorys();
    }, []);
    return (
        <div>
            <div className='flex justify-between mb-[20px]'>
                <h1 className='text-[30px]'>View Products / Created</h1>
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
                            <input multiple onChange={(e) => { previewImg(e.target.files) }} type="file" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            <label htmlFor="" className='flex pt-3'>
                                {files && files.map((item, index) => {
                                    return <img key={index} className='ml-5' src={URL.createObjectURL(item)} alt="" width={150} height={200} />
                                })}
                            </label>
                        </div>
                        <div className="w-full  mb-[10px]">
                            <label htmlFor="Category" className="block mb-3 text-sm font-semibold text-gray-500">Category</label>
                            <select {...register('category', { required: true })} className="w-full border bg-white rounded px-3 py-2 outline-none">
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
                        <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Created</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatProduct