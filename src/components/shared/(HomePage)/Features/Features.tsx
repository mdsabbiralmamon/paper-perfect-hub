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
                        className="grid grid-cols-3 gap-2 mt-10">

                        {/* <!-- Feature 1 --> */}
                        <div className='bg-base-100 lg:w-96 shadow-xl'>
                            <div className="md:p-8 lg:p-10 p-4 md:border-gray-200">
                                <div className="size-10 md:size-14 rounded-full bg-teal-200 flex justify-center items-center">
                                    <i className="text-lg fa-solid fa-truck-fast md:text-3xl text-gray-900"></i>
                                </div>
                                <h3 className="mt-4 md:mt-8 text-sm md:text-xl font-bold text-gray-900">Timely Delivery</h3>
                                <p className="mt-4 md:mt-5 text-[10px] md:text-base text-gray-600">Deadlines are crucial, and we make sure your assignments and reports are delivered on time.</p>
                            </div>
                        </div>

                        {/* <!-- Feature 2 --> */}
                        <div className='bg-base-100 lg:w-96 shadow-xl'>
                            <div className="md:p-8 lg:p-10 p-4 md:border-gray-200">
                                <div className="size-10 md:size-14 rounded-full bg-yellow-200 flex justify-center items-center">
                                    <i className="text-lg fa-solid fa-shield md:text-3xl text-gray-900"></i>
                                </div>
                                <h3 className="mt-4 md:mt-8  text-sm md:text-xl font-bold text-gray-900">Confidential and Reliable</h3>
                                <p className="mt-4 md:mt-5 text-[10px] md:text-base  text-gray-600">Your privacy is our top priority. All requests are handled with utmost confidentiality.</p>
                            </div>
                        </div>

                        {/* <!-- Feature 3 --> */}
                        <div className='bg-base-100 lg:w-96 shadow-xl'>
                            <div className="md:p-8 lg:p-10 p-4 md:border-gray-200">
                                <div className="size-10 md:size-14 rounded-full bg-green-200 flex justify-center items-center">
                                    <i className="text-lg fa-solid fa-pen-nib md:text-3xl text-gray-900"></i>
                                </div>
                                <h3 className="mt-4 md:mt-8  text-sm md:text-xl font-bold text-gray-900">Quality Assurance</h3>
                                <p className="mt-4 md:mt-5 text-[10px] md:text-base  text-gray-600">We are committed to delivering quality content that meets your academic standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;