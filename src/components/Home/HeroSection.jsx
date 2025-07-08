import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="relative w-full h-200 text-white">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/nikita-hero.mp4" // 🔁 Your actual video path
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                {/* Logo Title */}
                <div className="flex items-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest mr-10">
                        NIKITA
                    </h1>
                    <span className="md:text-xl font-bold uppercase tracking-widest">
                        EST. 1992
                    </span>
                </div>

                {/* EST */}
                <p className="text-blue-600 text-5xl md:text-7xl font-extrabold leading-tight tracking-wide mb-7 md:ml-15">AUTOCRAFT</p>

                {/* Services */}
                <p className="text-sm md:text-xl uppercase font-bold tracking-widest relative inline-block pb-2 ">
                    <span className="absolute -top-2 left-0 w-full h-1 bg-yellow-400 z-0"></span>
                    <span className="relative z-10 max-w-2xl">MOT · SERVICE · BODY REPAIRS · RESPRAY</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 z-0"></span>
                </p>

                {/* Sub Text */}
                <p className="mt-16 text-md sm:text-xl text-gray-300">
                    Your One-Stop Auto Repair Shop
                </p>

                {/* CTA Button */}
                <button className="mt-6 bg-black border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition">
                    <FaArrowRight className="text-yellow-400" />
                    <span>GET A QUOTE</span>
                </button>

                {/* Badge Row */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2 font-semibold px-3 py-1 rounded">
                        <FaArrowRight className='bg-yellow-400 text-black w-8 h-5' /> Fast Service
                    </div>
                    <div className="flex items-center gap-2 font-semibold px-3 py-1 rounded">
                        <FaArrowRight className='bg-yellow-400 text-black w-7 h-5' /> Quality Care
                    </div>
                </div>
            </div>
                
            {/* Bottom Info Bar */}
            <div className="absolute left-0 w-full z-10 px-4 bottom-10 border-t border-gray-700 pt-5">
                <div className="max-w-2xl mx-auto bg-black bg-opacity-70 backdrop-blur-sm rounded-full flex flex-wrap md:flex-nowrap items-center justify-between px-6 py-3 text-white text-sm font-semibold shadow-lg">

                    {/* Team Info */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 uppercase">Leicester Team</span>
                        <span className="text-2xl text-white font-bold">5</span>
                    </div>

                    {/* Top Rated */}
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <span className="uppercase text-gray-400">Top Rated</span>

                        {/* Rating Box */}
                        <div className="flex items-center gap-2 bg-black border border-gray-600 px-4 py-1 rounded-full">
                            {/* Stars */}
                            <div className="flex text-yellow-400 text-xs space-x-1">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            {/* Score */}
                            <span className="text-white text-sm">4.3/5 from</span>
                            {/* Reviews */}
                            <span className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs">20+ Reviews</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
