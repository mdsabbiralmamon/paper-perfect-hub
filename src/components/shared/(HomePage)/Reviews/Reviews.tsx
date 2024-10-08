import React from 'react';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stats from '../Stats/Stats';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: "John Doe",
            rating: 4.5,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            _id: 2,
            name: "Nafis",
            rating: 5,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            _id: 3,
            name: "Sadik",
            rating: 3.5,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            _id: 4,
            name: "Jashim",
            rating: 3.9,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            _id: 5,
            name: "Sanjana",
            rating: 5,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            _id: 6,
            name: "Rahima",
            rating: 4.5,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            _id: 7,
            name: "John Doe",
            rating: 4.5,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            _id: 12364,
            name: "John Doe",
            rating: 3,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <section className="py-10 bg-[#1660a0] bg-opacity-10 sm:py-16 lg:py-24">
                <Stats />
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">What our customers say</h2>
                        <p className="mb-10 max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>

                    {/* Review Slider */}
                    <Slider {...settings}>
                        {reviews.map((review) => (
                            <div key={review._id} className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <div className="min-w-0 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">
                                                {review.name.length > 3 ? review.name.slice(0, 3) : review.name}****
                                            </p>
                                            <p className="text-sm text-gray-600 truncate">
                                                {String(review._id).length > 4 ? `# ${String(review._id)}` : `# 000${String(review._id)}`}
                                            </p>
                                        </div>
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            value={typeof review.rating === 'string' ? parseFloat(review.rating) : review.rating} // Convert to number if it's a string
                                            readOnly
                                        />
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            {review.review}
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
