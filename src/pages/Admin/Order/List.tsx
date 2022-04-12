import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { listOrder, updateOrder } from '../../../api/orderApi';


const ListOrder = () => {
    const [orders, setOrders] = useState<any>([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const { data } = await listOrder();
            setOrders(data)
        }
        fetchOrders();
    }, []);
    const handlerOnchane = async (status: any, _id: any) => {
        const { data } = await updateOrder(_id, status);
        setOrders(orders.map(item => item._id === data._id ? data : item));
    };
    return (
        <div>
            <div className="w-full overflow-hidden shadow-xs">
                <div className='flex justify-between mb-[20px]'>
                    <h1 className='text-[30px]'>View Order</h1>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-70 dark:text-gray-400 dark:bg-gray-800 bg-purple-600 text-white">
                                <th className="px-4 py-3">#</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Phone</th>
                                <th className="px-4 py-3">Address</th>
                                <th className="px-4 py-3">Total</th>
                                <th className="px-4 py-3">Creat Time</th>
                                <th className="px-4 py-3"> Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {orders?.map((item, index) => {
                                return (
                                    <tr key={index} className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.phone}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.address}
                                        </td>
                                        <td className="px-4 py-3 text-xs">
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                $ {item.total}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.createdAt}
                                        </td>

                                        <td className="px-4 py-3 text-sm">
                                            <select onChange={(e) => {
                                                handlerOnchane({ status: e.target.value }, item._id)
                                            }} className="w-[150px] mr-[20px] border bg-white rounded px-3 py-2 outline-none">

                                                <option className="py-1" value={0} >--Chưa xác nhận</option>
                                                <option className="py-1" value={1} >--Đã gửi hàng</option>
                                                <option className="py-1" value={2} >--Giao hàng thành công</option>
                                                <option className="py-1" value={3} >--Đã huỷ</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-3 text-xs">
                                            <Link to={`/admin/orders/${item._id}/detail`} className="p-2 underline">Detail</Link>
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
        </div>

    )
}

export default ListOrder