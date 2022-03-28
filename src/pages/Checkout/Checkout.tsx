import React, { useState } from "react";

const CheckoutPage = () => {
    return (
        <div>
            <nav className="flex lg:mt-[40px] mx-[30px] border-[1px] border-gray-300 px-5 mb-[30px]" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-[25px] font-medium text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <a href="#" className="ml-1 text-[25px] font-medium text-gray-400 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Shops</a>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <a href="#" className="ml-1 text-[25px] font-medium text-gray-400 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Cart</a>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <a href="#" className="ml-1 text-[25px] font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Checkout</a>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                        </h2>
                        <form className="justify-center w-full mx-auto" method="post">
                            <div className="">
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="Email" className="block mb-3 text-sm font-semibold text-gray-500">Name</label>
                                        <input name="Last Name" type="text" placeholder="Your Name" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="Email" className="block mb-3 text-sm font-semibold text-gray-500">Number Phone</label>
                                        <input name="Last Name" type="text" placeholder="Phone" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="Address" className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                        <textarea className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" name="Address" cols={20} rows={4} placeholder="Address" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="relative pt-3 xl:pt-6"><label htmlFor="note" className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note" className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600" rows={4} placeholder="Notes for delivery" defaultValue={""} />
                                </div>
                                <div className="mt-4">
                                    <button className="w-full px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Process</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold">Order Summary
                            </h2>
                            <div className="mt-8">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/user/erondu/1600x900" alt="image" className="w-60" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">Title</h2>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                            <span className="text-red-600">Price</span> $20
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" alt="image" className="w-60" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">Title</h2>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                            <span className="text-red-600">Price</span> $20
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex p-4 mt-4">
                                <h2 className="text-xl font-bold">Description</h2>
                            </div>
                            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span className="ml-2">$40.00</span></div>
                            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax<span className="ml-2">$10</span></div>
                            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span className="ml-2">$50.00</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
