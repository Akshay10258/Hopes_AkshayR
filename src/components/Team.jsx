"use client"
import React from 'react';
import { teamMembers } from '../domains';
import logo from '../assets/logo.webp';
// import logo from '../assets/logo.jpg';
const TeamMembers = () => {
    return (
    <div id='Team'>
        <div className='text-white w-fit text-3xl md:text-2xl xl:text-6xl m-8 my-20 mx-auto'>Meet Our Team</div>
        <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
            <div
            key={index}
            className="max-w-xs w-full bg-white rounded-lg shadow-lg transform transition-all border-2 border-white duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            >
            <div className="relative">
                <img
                src={logo}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-lg"
                onError={(e) => (e.target.src = "/images/placeholder.jpg")} // Placeholder image
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-t-lg"></div>
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-2xl text-gray-500">{member.role}</p>
                <a
                href={member.domain}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-3 inline-block"
                >
                Visit Profile
                </a>
            </div>
            </div>
        ))}
        </div>
    </div>
    
    );
};

export default TeamMembers;
