import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {

    const cards = [
        {
            title: 'Assignments',
            href: '/request/assignments',
            content: 'Need someone to do your assignment? Whether it’s writing, research, or calculations, we’ve got the experts to get it done right.',
            image: 'https://i.ibb.co.com/t2nCKV1/assignment-16928833.png'
        },

        {
            title: 'Internship Reports',
            href: '/request/internship',
            content: 'Summarizing your internship experience effectively can be tough. Let us help you create a professional report that highlights your learning and skills.',
            image: 'https://i.ibb.co.com/6Yxk3cT/seo-report-6396947.png'
        },

        {
            title: 'Project Reports',
            href: '/request/project',
            content: 'Have a project that needs a detailed report? Our team can compile data, add analysis, and provide you with a well-structured document.',
            image: 'https://i.ibb.co.com/XzSG4bz/plan-10154582.png'
        },

        {
            title: 'Presentation Slides',
            href: '/request/presentation',
            content: 'Need visually engaging presentation slides? We create custom designs that communicate your ideas effectively and make your presentation stand out.',
            image: 'https://i.ibb.co.com/BqBgdcW/presentation-4786150.png'
        },

        {
            title: 'Excel Sheets',
            href: '/request/sheets',
            content: 'Struggling with data analysis or complex calculations? Our experts can create organized, functional, and visually appealing Excel sheets tailored to your needs.',
            image: 'https://i.ibb.co.com/JWLcBzk/document-10231405.png'
        },
    ]

    return (
        <div className='mx-auto max-w-7xl py-10'>
            <div></div>
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold mb-12 font-lora blue-shadow">
                    Get Expert Help for Your Academic Needs
                    <br />
                    <span className='text-xs font-lora text-[#1660a0]'>Assignments, Reports, Presentations, and Excel Sheets—Done Perfectly!</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {cards?.map(card =>
                        <Link key={card?.title} className="service-card bg-white rounded-lg shadow-lg p-6" href={card?.href}>
                            <div>
                                <div className="text-5xl mb-4">
                                    <Image
                                        alt='Assignments'
                                        src={card?.image}
                                        width={'90'}
                                        height={'90'}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 font-lora">
                                    {card?.title}
                                </h3>
                                <p className="text-gray-600 text-xs">{card?.content}</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;