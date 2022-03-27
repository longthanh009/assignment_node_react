import React from 'react'

const ShopPage = () => {
    return (
        <div>
            <nav className="flex lg:mt-[40px] mx-[30px] border-[1px] border-gray-300 px-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-[25px] font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <a href="#" className="ml-1 text-[25px] font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Shops</a>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className='flex justify-center py-16'>
                <div className='w-[30%]' aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                        <div className="">
                            <label htmlFor="form-search" className="sr-only">Search</label>
                            <div className="relative mb-[30px]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                </div>
                                <input type="text" id="form-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search name product"/>
                            </div>
                        </div>
                        <ul className="space-y-2">
                            <h2 className='text-[20px] mb-[20px] font-extrabold'>Categoryes</h2>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    
                                    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-[68%]'>
                    <div className="bg-white">
                        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                                </a>
                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                                </a>
                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                                </a>
                                <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
                        <div className="flex-1 flex justify-between sm:hidden">
                            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                            <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
                        </div>
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between lg:justify-center xl:justify-center">
                            <div>
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Previous</span>
                                        {/* Heroicon name: solid/chevron-left */}
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                    <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Next</span>
                                        {/* Heroicon name: solid/chevron-right */}
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage