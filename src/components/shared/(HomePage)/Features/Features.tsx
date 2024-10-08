import React from 'react';

const Features = () => {
    return (
        <div className='px-4 mx-auto max-w-7xl sm:px-6 py-10 sm:py-16'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

            <section>
                <div className=" mx-auto max-w-7xl">
                    <div className='blue-shadow'>
                        <h2 className="text-3xl sm:text-4xl xl:text-4xl capitalize font-bold leading-tight font-lora">
                            Our Best Features <br />
                            <span className='text-[#1660a0] font-lora text-xl sm:text-2xl xl:text-3xl'>Special for you</span>
                        </h2>
                    </div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-4 mt-10">

                        {/* <!-- Feature 1 --> */}
                        <div className='card bg-base-100 lg:w-96 shadow-xl'>
                            <div className="card-body md:p-8 lg:p-10 md:border-gray-200">
                                <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                                    <i className="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
                                </div>
                                <h3 className="mt-8 text-xl font-bold text-gray-900">Timely Delivery</h3>
                                <p className="mt-5 text-base text-gray-600">Deadlines are crucial, and we make sure your assignments and reports are delivered on time.</p>
                            </div>
                        </div>

                        {/* <!-- Feature 2 --> */}
                        <div className='card bg-base-100 lg:w-96 shadow-xl'>
                            <div className="card-body md:p-8 lg:p-10 md:border-gray-200">
                                <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                                    <i className="fa-solid fa-shield text-3xl text-gray-900"></i>
                                </div>
                                <h3 className="mt-8 text-xl font-bold text-gray-900">Confidential and Reliable</h3>
                                <p className="mt-5 text-base text-gray-600">Your privacy is our top priority. All requests are handled with utmost confidentiality.</p>
                            </div>
                        </div>

                        {/* <!-- Feature 3 --> */}
                        <div className='card bg-base-100 lg:w-96 shadow-xl'>
                            <div className="card-body md:p-8 lg:p-10 md:border-gray-200">
                                <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                                    <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
                                </div>
                                <h3 className="mt-8 text-xl font-bold text-gray-900">Quality Assurance</h3>
                                <p className="mt-5 text-base text-gray-600">We are committed to delivering quality content that meets your academic standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;