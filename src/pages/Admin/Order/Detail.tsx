import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { orderDetailList } from '../../../api/orderDetailApi';

const DetailOrder = () => {
    const [itemsCart, setItemsCart] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchOrder = async () => {
            const { data } = await orderDetailList(id);
            setItemsCart(data)
        }
        fetchOrder();
    },[]);
    return (
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Order Detail</h1>
                        <h2 className="font-semibold text-2xl">{itemsCart.length} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                    </div>
                    {itemsCart?.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5"> {/* product */}
                                    <div className="flex flex-col justify-between ml-4 flex-grow flex-col">
                                        <span className="font-bold text-sm">{item.productname}</span>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                <span>{item.quantity}</span>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">$ {item.price}</span>
                            </div>
                        )
                    })}
                    <a href="/admin/orders" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Return
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DetailOrder