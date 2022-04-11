import React from 'react'

const HomePage = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-18 px-[35px]">
                {/*Left Col*/}
                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24">
                    <p className="uppercase tracking-loose">Witty Tagline</p>
                    <h1 className="font-bold text-3xl my-4">My Super App</h1>
                    <p className="leading-normal mb-4">Enter your super app's description here... The key is to find the right length.  Don't want it to be too long, but then don't want it to be too short so that it looks weird between the title and button below.</p>
                    <button className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">Super Button</button>
                </div>
                {/*Right Col*/}
                <div className="w-full lg:w-1/2 lg:py-6 text-center">
                    {/*Add your product image here*/}
                    <img src="https://cdn.tgdd.vn/Files/2020/12/29/1316780/bo-tui-ngay-nhung-tu-the-chup-anh-dep-cho-nam-tu-nhien-202201141535262251.jpg" alt="" />
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className=" text-[40px] mb-3">Hots</h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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

                        {/* More products... */}
                    </div>

                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className=" text-[40px] mb-3">Products News</h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
                        </a>
                        <a href="#" className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>
                        {/* More products... */}
                    </div>

                </div>
            </div>
            <div className='px-[35px]'>
                <h2 className="text-[40px] mb-3">Blogs</h2>
                <div className="flex flex-wrap justify-between -mx-6">
                    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                <img src="https://source.unsplash.com/collection/3657445/800x600" className="h-full w-full rounded-t pb-6" />
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                            <div className="flex items-center justify-between">
                                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                            </div>
                        </div>
                    </div>
                    {/*1/2 col */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                <img src="https://source.unsplash.com/collection/764827/800x600" className="h-full w-full rounded-t pb-6" />
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                            <div className="flex items-center justify-between">
                                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage