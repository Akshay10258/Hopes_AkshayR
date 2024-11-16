import React from 'react';
import Aarohi from '../assets/aarohi.webp';
import AT from '../assets/AT.webp';
import etc from '../assets/etc.webp';
const Events = () => {
  // Sample event data
    const eventList = [
        {
        id: 1,
        thumbnail: Aarohi, 
        title: "AAROHI",
        subtitle:'Freshers Day | Club Showcase',
        description: 'Aarohi is one of the most awaited events on campus, designed to give a warm welcome to the newest members of our college. This vibrant and lively occasion serves as a platform for first-year students to mingle, showcase their talents, and get a glimpse of the diverse clubs and societies that form the heart of our campus life.',
        },
        {
        id: 2,
        thumbnail: AT,
        title: "AATMATRISHA",
        subtitle:'Annual Fest | Cultural Night',
        description: 'Aatmatrisha is our college’s grand annual fest, a vibrant celebration of music, culture, and creativity. It features electrifying concerts by renowned artists, ethnic days showcasing traditional attire and cultural diversity, and an array of exciting cultural events The fest also hosts thrilling competitions, fun-filled food and game stalls, and a spectacular grand finale. Aatmatrish is more than just an event—it’s a celebration of unity, talent, and unforgettable memories, bringing the entire college together in an exhilarating experience.',
        },
        {
        id: 3,
        thumbnail: etc,
        title: 'ETCETRA',
        subtitle:"Podcast",
        description: 'Join our lively hosts as we dive into the vibrant world of student life, academic adventures, and all things that make up the campus life.From epic events to captivating conversations with students, faculty members and esteemed guests, "Etcetera" is your passport to the lively pulse of PES University. Whether you are a student, alum, or just curious about university life, tune in for an energetic dose of campus vibes! Get ready to laugh, learn, and live the PESU experience with us!'
        },
    ];

    return (
        <div
        className="background-container bg-fixed bg-cover bg-center text-white py-10"
        >
        <div className="container mx-auto px-4">
            <h2 className="text-8xl font-bold mb-10 text-center">Events</h2>
            <div className="flex flex-col items-center space-y-8">
            {eventList.map((event) => (
                <div
                key={event.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                style={{ width: '80vw' }}
                >
                <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="h-80 object-contain w-full rounded-xl mb-4"
                />
                <h1 className="text-4xl font-extrabold mb-3">{event.title}</h1>
                <h3 className="text-2xl font-semibold mb-3">{event.subtitle}</h3>
                <p className="text-gray-400">{event.description}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Events;
