import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { fetchProducts } from "../../../features/product/productSlice";
const ListProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.value)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className='flex justify-between mb-[20px]'>
                <h1 className='text-[30px]'>View Products</h1>
                <Link to="/admin/products/create" className=' bg-purple-600 hover:bg-purple-800 text-white p-[10px] mr-[20px]'>Created</Link>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Product</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Quantity</th>
                            <th className="px-4 py-3">Creat Time</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {products?.map((item, index) => {
                            return (
                                <tr key={index} className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3 text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            {/* Avatar with inset shadow */}
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full" src={item.img} alt="" loading="lazy" />
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
                                        <button className='p-2 underline'>Remove</button>
                                        <Link to={``} className="p-2 underline">Edit</Link>
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
                                <NavLink to="" className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                    </svg>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="" className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="" className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="" className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    3
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="" className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
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