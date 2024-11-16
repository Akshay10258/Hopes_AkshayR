import React from 'react';

const AboutUs = () => {
    return (
        <div id='About'
        className=" border-white border-4 w-[80vw] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mx-auto overflow-auto my-8 m-15 p-10 bg-black rounded-lg shadow-xl">
        <h1 className="text-5xl p-5 text-white font-extrabold text-center tracking-wide">
            About Us
        </h1>
        <div className="text-2xl text-gray-300 leading-relaxed p-5 text-justify max-w-7xl mx-auto">
            We specialize in comprehensive media coverage, capturing the essence of
            campus life through captivating visuals and compelling audio, including
            an immersive in-house podcast, <span className="text-red-500 italic">Etcetera</span> — One podcast, a thousand
            stories.
        </div>
        </div>
    );
};

export default AboutUs;