import React from 'react'
import hero from '../assets/hopesHero.jpg';

const Hero = () => {
    return (
        <div 
            style={{ backgroundImage: `url(${hero})` }} 
            className="anton-regular font-extrabold bg-cover bg-center w-full h-[420px] bg-no-repeat flex flex-col justify-center items-center">
            <h1 className="gradient-text-animation text-white w-fit md:text-9xl text-[70px] xl:text-[220px] md:py-0 py-9">
                HoPES
            </h1>
            <h3 className="gradient-text-animation text-white w-fit text-1xl md:text-2xl xl:text-3xl">
                The Official Media Club Under PESU
            </h3>
        </div>
    );
}

export default Hero;
