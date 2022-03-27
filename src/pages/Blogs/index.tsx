import React from 'react'

const BlogsPage = () => {
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
                            <a href="#" className="ml-1 text-[25px] font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Blogs</a>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className='px-[35px] mt-[70px]'>
                <h2 className="text-[40px] mb-3 text-center">The Blogs</h2>
                <p className='text-[16px] w-[50%] text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ut est sapiente, nesciunt quos delectus tempora omnis nobis perspiciatis in voluptas molestias praesentium, sed similique velit sint amet rerum facilis!</p>
                <div className="flex flex-wrap justify-between -mx-6 mt-[30px]">
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
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
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
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
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
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
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
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
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
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
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
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
            <section className="bg-white py-8">
                <div className="container py-8 px-6 mx-auto">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">
                        About
                    </a>
                    <p className="mt-8 mb-8">This template is inspired by the stunning nordic minamalist design - in particular:
                        <br />
                        <a className="text-gray-800 underline hover:text-gray-900" href="http://savoy.nordicmade.com/" target="_blank">Savoy Theme</a> created by <a className="text-gray-800 underline hover:text-gray-900" href="https://nordicmade.com/">https://nordicmade.com/</a> and <a className="text-gray-800 underline hover:text-gray-900" href="https://www.metricdesign.no/" target="_blank">https://www.metricdesign.no/</a></p>
                    <p className="mb-8">Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae congue eu consequat ac.</p>
                </div>
            </section>
        </div>
    )
}

export default BlogsPage;