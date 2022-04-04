import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Link, NavLink } from 'react-router-dom';
import { fetchProducts, filterProduct, removeProduct } from "../../../features/product/productSlice";
import { productType } from '../../../types/productType';
import { categoryType } from '../../../types/categoryType';
import { list } from '../../../api/categoryApi';
import { read } from '../../../api/fileApi';
const ListProducts = () => {
    const dispatch = useAppDispatch();
    let products = useAppSelector((state) => state.products.value);
    const [categorys, setCategorys] = useState<categoryType[]>()
    useEffect(() => {
        const getCategorys = async () => {
            const { data } = await list();
            setCategorys(data);
        };
        getCategorys();
        dispatch(fetchProducts())
    }, [])
    const removeItem = (id: string) => {
        let confim = confirm("Bạn có muốn xoá không ?");
        if (confim) {
            dispatch(removeProduct(id))
            alert("Xoá thành công")
        }
    };
    const fiterProduct = (id: string) => {
        if (id == "All") dispatch(fetchProducts())
        dispatch(filterProduct(id))
    }
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className='flex justify-between mb-[20px]'>
                <h1 className='text-[30px]'>View Products</h1>
                <Link to="/admin/products/create" className=' bg-purple-600 hover:bg-purple-800 text-white p-[10px] mr-[20px]'>Created</Link>
            </div>
            <form className='mb-4 flex'>
                <select onChange={(e) => fiterProduct(e.target.value)} className="w-[300px] mr-[20px] border bg-white rounded px-3 py-2 outline-none">
                    <option className="py-1" value="All" defaultChecked>All</option>
                    {categorys && categorys.map((item, index) => {
                        return <option key={index} className="py-1" value={item._id}>{item.name}</option>
                    })}
                </select>
                <div className="w-[400px] flex items-center">
                    <input type="text" placeholder="Search name product here" className="w-full pr-10 pl-4 py-2 border rounded text-gray-700 focus:outline-none focus:border-purple-600" />
                    <svg className="w-4 h-4 fill-current text-gray-500 -ml-8 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                </div>
            </form>
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-70 dark:text-gray-400 dark:bg-gray-800 bg-purple-600 text-white">
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Product</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Quantity</th>
                            <th className="px-4 py-3">Creat Time</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {products?.map((item: productType, index) => {
                            return (
                                <tr key={index} className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3 text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                             {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full" src="" alt="" loading="lazy" />
                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ {item.price}
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                            {item.quantity}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        {item.updatedAt}
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <button className='p-2 underline'
                                            onClick={() => {
                                                removeItem(item._id)
                                            }}
                                        >Remove</button>
                                        <Link to={`/admin/products/${item._id}/edit`} className="p-2 underline">Edit</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                <span className="flex items-center col-span-3">
                    Showing 21-30 of 100
                </span>
                <span className="col-span-2" />
                {/* Pagination */}
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                        <ul className="inline-flex items-center">
                            <li>
                                <NavLink to="/admim/products?page" className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                    </svg>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admim/products?page" className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admim/products?page" className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admim/products?page" className="px-3 py-1 active:text-white transition-colors duration-150 active:bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    3
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admim/products?page" className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    4
                                </NavLink>
                            </li>
                            <li>
                                <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                                    <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </span>
            </div>
        </div>
    )
}

export default ListProducts